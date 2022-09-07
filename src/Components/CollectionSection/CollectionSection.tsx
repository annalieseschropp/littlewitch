import './CollectionSection.scss';
import Collection from '../Collection/Collection';
import Products from '../Products/Products';

const CollectionSection = () => {

  return (
    <div>
      <div className="relative flex flex-row items-center w-2/3">
        <div className="basis-1/6 border-t-0 border-light-grey"></div>
        <span className="flex-shrink px-8 text-white text-left font-header text-4xl bg-dark-grey mt-[-1.5rem]">shop</span>
        <div className="basis-5/6 border-t-0 border-light-grey"></div>
      </div>
      <Products/>
    </div>
  );
}
  
export default CollectionSection;