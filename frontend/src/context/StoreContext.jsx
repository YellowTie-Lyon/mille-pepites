import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const StoreContext = createContext(null);

function load(key, fallback) {
  try {
    const v = JSON.parse(window.localStorage.getItem(key));
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }) {
  const [items, setItems] = useState(() => load("mp_cart", []));
  const [notices, setNotices] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(() => load("mp_user", null));
  const [promo, setPromo] = useState(() => load("mp_promo", null));
  const [lastOrder, setLastOrder] = useState(null);

  useEffect(() => {
    window.localStorage.setItem("mp_cart", JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    window.localStorage.setItem("mp_user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    window.localStorage.setItem("mp_promo", JSON.stringify(promo));
  }, [promo]);

  const notify = useCallback((type, text, action = null) => {
    const id = Date.now() + Math.random();
    setNotices((n) => [...n, { id, type, text, action }]);
    window.setTimeout(() => {
      setNotices((n) => n.filter((x) => x.id !== id));
    }, 4500);
  }, []);

  const dismissNotice = useCallback((id) => {
    setNotices((n) => n.filter((x) => x.id !== id));
  }, []);

  const addItem = useCallback(
    (item, qty = 1) => {
      setItems((prev) => {
        const i = prev.findIndex((x) => x.key === item.key);
        if (i >= 0) {
          const next = [...prev];
          next[i] = { ...next[i], qty: next[i].qty + qty };
          return next;
        }
        return [...prev, { ...item, qty }];
      });
      notify("success", item.notice || `${item.name} a été ajouté à votre panier.`, {
        label: "Voir le panier",
        to: "/panier/",
      });
    },
    [notify]
  );

  const setQty = useCallback((key, qty) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((x) => x.key !== key)
        : prev.map((x) => (x.key === key ? { ...x, qty } : x))
    );
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((x) => x.key !== key));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const count = useMemo(() => items.reduce((s, x) => s + x.qty, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((s, x) => s + x.price * x.qty, 0),
    [items]
  );
  const discount = useMemo(
    () => (promo ? subtotal * promo.rate : 0),
    [promo, subtotal]
  );

  const value = {
    items,
    addItem,
    setQty,
    removeItem,
    clearCart,
    count,
    subtotal,
    discount,
    notices,
    notify,
    dismissNotice,
    drawerOpen,
    setDrawerOpen,
    user,
    setUser,
    promo,
    setPromo,
    lastOrder,
    setLastOrder,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
