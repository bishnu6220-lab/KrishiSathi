import React from 'react';
import { X } from 'lucide-react';

export default function CartDrawer({ isCartOpen, setIsCartOpen, cart, setCart }) {
  if (!isCartOpen) return null;

  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="bg-white w-full max-w-md h-full p-5 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-base">खरिद टोकरी (Shopping Cart)</h3>
            <button onClick={() => setIsCartOpen(false)}>
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          <div className="mt-4 space-y-3 overflow-y-auto max-h-[60vh]">
            {cart.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-8">टोकरीमा कुनै सामान छैन।</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">{item.name}</span>
                    <span className="text-slate-400">Qty: {item.qty} × Rs. {item.price}</span>
                  </div>
                  <span className="font-extrabold text-emerald-800">Rs. {item.qty * item.price}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="border-t border-slate-100 pt-4 space-y-3">
            <div className="flex justify-between text-sm font-extrabold text-slate-900">
              <span>जम्मा रकम (Total):</span>
              <span>Rs. {total}</span>
            </div>
            <button
              onClick={() => {
                setCart([]);
                setIsCartOpen(false);
                alert('अर्डर सफलतापूर्वक थपियो! Cash on Delivery रोजिएको छ।');
              }}
              className="w-full bg-emerald-800 text-white font-bold text-xs py-3 rounded-xl hover:bg-emerald-900 transition"
            >
              अर्डर पक्का गर्नुहोस् (Confirm Checkout)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
