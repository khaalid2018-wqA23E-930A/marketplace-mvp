import { createContext, useContext, useMemo, useState } from 'react';

const CartCtx = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]); // [{id,name,price,qty,image}]

    const api = useMemo(() => ({
        items,
        count: items.reduce((n, i) => n + i.qty, 0),
        total: items.reduce((n, i) => n + i.qty * i.price, 0),
        add(p, qty = 1) {
            setItems(prev => {
                const i = prev.findIndex(x => x.id === p.id);
                if (i >= 0) {
                    const cp = [...prev]; cp[i] = { ...cp[i], qty: cp[i].qty + qty }; return cp;
                }
                return [...prev, { ...p, qty }];
            });
        },
        remove(id) { setItems(prev => prev.filter(x => x.id !== id)); },
        clear() { setItems([]); }
    }), [items]);

    return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}

export const useCart = () => useContext(CartCtx);

