
import './App.css';
import { Navbar,ImageCard,Button} from './Components';
function App() {
  return (
    <div className="w-[100vw] h-[100%]">
    <Navbar />

    {/* page 1 */}
    <div className='w-[100%] h-[650px] flex flex-col justify-center px-[200px] '>
      <p className='text-[60px] font-[700]'>Create and Sell</p>
      <p className='text-[60px] font-[700]'>custom products</p>
      <ul className='font-[500] text-[#8f8f8f] py-[30px] px-[30px]'>
        <li>✔️ 100% Free to use</li>
        <li>✔️ 900+ High-Quality Products</li>
        <li>✔️ Largest global print network</li>
      </ul>
      <ul className='flex text-[15px] py-[20px]'>
        <li className='px-[10px]'><Button text="Start for free" bg="#4B77BE" fontcolor="white" /></li>
        <li><Button text="How it works?" bg="white" /></li>
      </ul>
      <p className='font-[500] text-[#4B77BE] text-[15px] px-[10px]'>Trusted by over 8M sellers around the world</p>
    </div>

 {/* page 2 */}
    <ul className='flex justify-center w-[100%] h-[500px]'>
      <li><ImageCard heading="Higher Profits" desc="We offer some of the lowest prices in the industry because print providers continuously compete to win your business." src="higher-profits.svg" /></li>
      <li><ImageCard heading="Robust Scaling" desc="Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality." src="robust-scaling.svg" /></li>
      <li><ImageCard heading="Best Selection" desc="With 900+ products and top quality brands, you can choose the best products for your business." src="best-selection.svg" /></li>
      
    </ul>

    {/* page 3 */}
    <div className='w-[100%] h-[700px] bg-[#f7f7f7] flex items-center justify-center'>
      <div className='w-[80%] h-[500px] bg-white rounded-md flex flex-col justify-center p-[50px]'>
        <p className='text-[30px] font-[500]'>Easily add your design to a</p>
        <p className='text-[30px] font-[500]'>wide range of products</p>
        <div className='py-[20px] text-[14px] text-[#afafaf]'>
          <p>With our free design tools, you can easily add your</p>
          <p>custom designs to t-shirts, mugs, phone cases, and</p>
          <p>hundreds of other products.</p>
        </div>
        <p className='text-[14px] font-[500] text-[#4B77BE]'>All Products ➡️</p>
      </div>
    </div>


    {/* page 4 */}


    </div>
  );
}

export default App;