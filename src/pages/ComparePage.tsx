
import Layout from "@/components/layout/Layout";
import products from "@/data/products";
import { useState } from "react";

const ComparePage = () => {
  const [selectedProducts, setSelectedProducts] = useState([products[0], products[1]]);

  return (
    <Layout>
      <div className="py-16">
        <div className="chrono-container">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">Compare Models</h1>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr>
                  <th className="p-4 text-left">Features</th>
                  {selectedProducts.map(product => (
                    <th key={product.id} className="p-4 text-center min-w-[250px]">
                      <div className="mb-4 h-40 flex items-center justify-center">
                        <img 
                          src={Object.values(product.images)[0]} 
                          alt={product.name} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="text-xl font-bold">{product.name}</div>
                      <div className="text-chronoGray-dark">{product.model}</div>
                      <div className="text-lg font-medium mt-2">${product.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-chronoGray-light">
                <tr>
                  <td className="p-4 font-medium">Display</td>
                  {selectedProducts.map(product => (
                    <td key={product.id} className="p-4 text-center">{product.specs.display}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium">Processor</td>
                  {selectedProducts.map(product => (
                    <td key={product.id} className="p-4 text-center">{product.specs.processor}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium">Battery</td>
                  {selectedProducts.map(product => (
                    <td key={product.id} className="p-4 text-center">{product.specs.battery}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium">Storage</td>
                  {selectedProducts.map(product => (
                    <td key={product.id} className="p-4 text-center">{product.specs.storage}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium">Water Resistance</td>
                  {selectedProducts.map(product => (
                    <td key={product.id} className="p-4 text-center">{product.specs.waterResistant}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium">Connectivity</td>
                  {selectedProducts.map(product => (
                    <td key={product.id} className="p-4 text-center">{product.specs.connectivity}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium">Sensors</td>
                  {selectedProducts.map(product => (
                    <td key={product.id} className="p-4 text-center">{product.specs.sensors}</td>
                  ))}
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="p-4"></td>
                  {selectedProducts.map(product => (
                    <td key={product.id} className="p-4 text-center">
                      <a 
                        href={`/product/${product.id}`} 
                        className="chrono-button-primary inline-block"
                      >
                        View Details
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComparePage;
