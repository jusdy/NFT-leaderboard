import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NFTItem from "./NFTItem";

const itemList = [
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
  { id: 123, price: 0.01 },
];

interface ListType {
    id: number;
    price: number
}

const NFTs = () => {
  const [NFTItems, setNFTItems] = useState<ListType[]>([]);
  const fetchMoreData = () => {
    // console.log(NFTItems.length);
    let length = NFTItems.length;
    console.log(length)
    console.log(itemList.length)
    if (length === itemList.length) return;
    for (let i = 0; i < 3; i++) {
        let length = NFTItems.length;
        console.log(length)
        if(NFTItems.length === itemList.length) break;
        console.log('asdf')
        setNFTItems((cur: any) => [...cur, itemList[length + i]]);
    }
  };

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      setNFTItems((cur: any) => [...cur, itemList[i]]);
    }
  }, []);

  return (
    <div
      id="scrollableDiv"
      className="h-full scrollbar pr-2 mt-10"
      style={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <InfiniteScroll
        dataLength={NFTItems.length}
        next={() => {NFTItems.length < itemList.length && fetchMoreData()}}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "20px",
          height: "100%",
          overflow: "auto",
        }}
      >
        {NFTItems.map((item, index) => (
          <NFTItem key={`nft-${index}`} id={item.id} price={item.price} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default NFTs;
