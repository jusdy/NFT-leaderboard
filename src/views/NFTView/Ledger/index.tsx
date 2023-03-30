//@ts-ignore
import { TablePagination } from "react-pagination-table";

const Header = ["POSITION", "NFT ID", "POINTS", "SALE/PRICE"];

const data = [
  {
    position: 18,
    NFTId: "#0",
    points: 10,
    salePrice: "833 CRZ",
  },
  {
    position: 11,
    NFTId: "#68",
    points: 23,
    salePrice: "861 CRZ",
  },
  {
    position: 10,
    NFTId: "#59",
    points: 29,
    salePrice: "244 CRZ",
  },
  {
    position: 2,
    NFTId: "#47",
    points: 28,
    salePrice: "3 CRZ",
  },
  {
    position: 10,
    NFTId: "#71",
    points: 3,
    salePrice: "880 CRZ",
  },
  {
    position: 13,
    NFTId: "#62",
    points: 14,
    salePrice: "892 CRZ",
  },
  {
    position: 12,
    NFTId: "#28",
    points: 20,
    salePrice: "491 CRZ",
  },
  {
    position: 6,
    NFTId: "#56",
    points: 15,
    salePrice: "824 CRZ",
  },
  {
    position: 1,
    NFTId: "#59",
    points: 40,
    salePrice: "730 CRZ",
  },
  {
    position: 0,
    NFTId: "#21",
    points: 40,
    salePrice: "589 CRZ",
  },
  {
    position: 11,
    NFTId: "#96",
    points: 8,
    salePrice: "599 CRZ",
  },
  {
    position: 18,
    NFTId: "#32",
    points: 31,
    salePrice: "444 CRZ",
  },
  {
    position: 1,
    NFTId: "#83",
    points: 27,
    salePrice: "595 CRZ",
  },
  {
    position: 10,
    NFTId: "#83",
    points: 27,
    salePrice: "595 CRZ",
  },
  {
    position: 19,
    NFTId: "#76",
    points: 19,
    salePrice: "306 CRZ",
  },
  {
    position: 5,
    NFTId: "#39",
    points: 4,
    salePrice: "160 CRZ",
  },
  {
    position: 5,
    NFTId: "#75",
    points: 6,
    salePrice: "216 CRZ",
  },
  {
    position: 16,
    NFTId: "#66",
    points: 21,
    salePrice: "679 CRZ",
  },
  {
    position: 18,
    NFTId: "#49",
    points: 18,
    salePrice: "72 CRZ",
  },
  {
    position: 3,
    NFTId: "#56",
    points: 38,
    salePrice: "170 CRZ",
  },
  {
    position: 18,
    NFTId: "#49",
    points: 18,
    salePrice: "72 CRZ",
  },
  {
    position: 3,
    NFTId: "#56",
    points: 38,
    salePrice: "170 CRZ",
  },
];

const NFTLedger = () => {
  return (
    <div className=" w-full h-full overflow-auto scrollbar font-molot">
      <TablePagination
        className="ledger mt-8 text-2xl"
        paginationClassName="font-play text-xl pagination-status"
        title="NFT Ledger"
        headers={Header}
        data={data}
        columns="position.NFTId.points.salePrice"
        perPageItemCount={10}
        totalCount={data.length}
        arrayOption={[["size", "all", " "]]}
      />
    </div>
  );
};

export default NFTLedger;
