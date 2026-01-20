// import { X, Minus, Plus, Trash2 } from 'lucide-react';
// import { Button } from './ui/button';
// import type { Product } from './ProductCard';

// export interface CartItem extends Product {
//   quantity: number;
// }

// interface ShoppingCartModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   cartItems: CartItem[];
//   onUpdateQuantity: (productId: number, quantity: number) => void;
//   onRemoveItem: (productId: number) => void;
// }

// export function ShoppingCartModal({ 
//   isOpen, 
//   onClose, 
//   cartItems, 
//   onUpdateQuantity, 
//   onRemoveItem 
// }: ShoppingCartModalProps) {
//   if (!isOpen) return null;

//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <>
//       {/* Backdrop */}
//       <div 
//         className="fixed inset-0 bg-black bg-opacity-50 z-40"
//         onClick={onClose}
//       />
      
//       {/* Modal */}
//       <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b">
//           <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
//           <button 
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Cart Items */}
//         <div className="flex-1 overflow-y-auto p-6">
//           {cartItems.length === 0 ? (
//             <div className="flex flex-col items-center justify-center h-full text-gray-500">
//               <p>Your cart is empty</p>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
//                   <img 
//                     src={item.image} 
//                     alt={item.name}
//                     className="w-20 h-20 object-contain bg-white rounded"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-gray-900">{item.name}</h3>
//                     <p className="text-pink-500 font-semibold mt-1">${item.price.toFixed(2)}</p>
                    
//                     {/* Quantity Controls */}
//                     <div className="flex items-center gap-2 mt-2">
//                       <button
//                         onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
//                         className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-100"
//                       >
//                         <Minus className="w-4 h-4" />
//                       </button>
//                       <span className="w-8 text-center font-semibold">{item.quantity}</span>
//                       <button
//                         onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
//                         className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-100"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => onRemoveItem(item.id)}
//                         className="ml-auto text-red-500 hover:text-red-700"
//                       >
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         {cartItems.length > 0 && (
//           <div className="border-t p-6 space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="font-semibold text-gray-900">Total:</span>
//               <span className="text-2xl font-bold text-pink-500">${total.toFixed(2)}</span>
//             </div>
//             <Button 
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
//             >
//               Checkout
//             </Button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
