import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import superSearch from "@codewell/super-search";
import { Hooks } from "providers";
import Popup from "components/agents/home/part/popup";
import { debounceSearchRender } from "helper/debouncer";
const DetailRequest = ({ data, isLoading }) => {
  // console.log(">>", data);
  const { details, setDetails, setId } = useContext(Hooks);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "NamaAgen",
      headerName: "Nama Agen",
      width: 200,
      editable: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      field: "NomorTelp",
      headerName: "Nomor Telp",
      width: 200,
      editable: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      field: "Alamat",
      headerName: "Alamat",
      type: "number",
      width: 200,
      editable: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Action",
      headerName: "Action",
      options: {
        sort: false,
        filter: false,
        searchable: false,
      },
    },
  ];
  // const data = [
  //   {
  //     id: 1,
  //     NamaAgen: "sfdsf",
  //     NomorTelp: "sdf",
  //     Alamat: "sdf",
  //   },
  // ];
  const datas = [];
  const rowx = async () => {
    data?.data?.map((val, i) => {
      return datas.push({
        id: i + 1,
        NamaAgen: val.customer.nama,
        NomorTelp: val.customer.no_telp,
        Alamat: val.customer.alamat_cust_lengkap,
        Action: (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              setDetails(!details);
              // return alert(JSON.stringify(params.row.id, null, 4));
              setId(i);
            }}
          >
            Details
          </button>
        ),
      });
    });
  };
  if (data !== undefined) {
    rowx();
  }
  // const [searchText, setSearchText] = useState();
  const options = {
    filterType: "dropdown",
    // filter: true,
    customSearchRender: debounceSearchRender(500),
    responsive: "stacked",
    // customSearch: (searchText, row) =>
    //   superSearch(searchText.toLowerCase(), { ...row }).numberOfMatches > 0,

    selectableRows: false, // <===== will turn off checkboxes in rows
  };
  // const data = [
  //   {
  //     id: "5fb1baec4697fe8f818db52d",
  //     name: "Merrill Bray",
  //     age: 24,
  //     salary: 546187,
  //   },
  //   {
  //     id: "5fb1baec4cc22444377466df",
  //     name: "Sheppard Greer",
  //     age: 24,
  //     salary: 622853,
  //   },
  //   {
  //     id: "5fb1baecb2c37cc00c6041f9",
  //     name: "Rosa Grimes",
  //     age: 25,
  //     salary: 396494,
  //   },
  //   {
  //     id: "5fb1baeceaffb158bf745b77",
  //     name: "Holden Beach",
  //     age: 25,
  //     salary: 426078,
  //   },
  //   {
  //     id: "5fb1baec954ea1da0c36d2f3",
  //     name: "Carla Owen",
  //     age: 20,
  //     salary: 486705,
  //   },
  //   {
  //     id: "5fb1baec5c0a3b85131d25a0",
  //     name: "Davenport Best",
  //     age: 27,
  //     salary: 230833,
  //   },
  // ];

  // const options = {
  //   filterType: "dropdown",
  //   responsive: "stacked",
  //   customSearch: (searchText, row) =>
  //     superSearch(searchText.toLowerCase(), { ...row }).numberOfMatches > 0,
  // };

  return (
    // <>{console.log("/>>datas", datas)}</>
    <>
      {/* {console.log(">>", datas)} */}
      <section className="detail-container d-block m-auto">
        <Popup data={data} />
        <div
          className="wrap-tabel"
          style={{
            height: "100%",
            width: "80%",
            background: "#FFFFFF",
            marginTop: "40px",
            margin: "0 auto",
          }}
        >
          <MUIDataTable
            title={"Transaksi Saat ini"}
            data={datas.map((val) => {
              return [
                val.id,
                val.NamaAgen,
                val.NomorTelp,
                val.Alamat,
                val.Action,
              ];
            })}
            columns={columns.map((val) => {
              return val.headerName;
            })}
            options={options}
          />
        </div>
      </section>
    </>
  );
};
export default DetailRequest;
// ReactDOM.render(<DetailRequest />, document.getElementById("root"));

// import React, { useContext, useState } from "react";
// import MUIDataTable from "mui-datatables";
// import { DataGrid } from "@material-ui/data-grid";
// import { useParams } from "react-router-dom";
// import { Hooks } from "providers";
// import SearchBar from "material-ui-search-bar";
// import PopUp from "components/agents/home/part/popup";
// import Gridx from "MUIDataTables";
// import superSearch from "@codewell/super-search";
// const customStyles = {
//   control: (provided, state) => ({
//     ...provided,
//     background: "#ffffff",
//     border: "1px solid #333333",
//     boxSizing: "border-box",
//     borderRadius: " 10px",
//     height: " 60px",
//   }),
// };

// function DetailRequest({ data, isLoading }) {
//   const { details, setDetails, setId } = useContext(Hooks);
//   const columns = [
//     { field: "id", headerName: "ID", width: 100 },
//     {
//       field: "NamaAgen",
//       headerName: "Nama Agen",
//       width: 200,
//       editable: true,
//       options: {
//         filter: true,
//       },
//     },
//     {
//       field: "NomorTelp",
//       headerName: "Nomor Telp",
//       width: 200,
//       editable: true,
//       options: {
//         filter: true,
//       },
//     },
//     {
//       field: "Alamat",
//       headerName: "Alamat",
//       type: "number",
//       width: 200,
//       editable: true,
//       options: {
//         filter: true,
//       },
//     },
//     // {
//     //   field: "Action",
//     //   headerName: "Action",
//     //   width: 200,
//     //   renderCell: (params) => {
//     //     return (
//     //       <button
//     //         type="button"
//     //         className="btn btn-success"
//     //         onClick={() => {
//     //           setDetails(!details);
//     //           // return alert(JSON.stringify(params.row.id, null, 4));
//     //           setId(JSON.stringify(params.row.id, null, 4));
//     //         }}
//     //       >
//     //         Details
//     //       </button>
//     //     );
//     //   },
//     // },
//   ];
//   const datas = [
//     {
//       id: 1,
//       NamaAgen: "sd",
//       NomorTelp: 424324,
//       Alamat: "sdds",
//     },
//   ];
//   const rowx = [];
//   data?.data.map((val, i) => {
//     return (rowx[i] = {
//       id: i + 1,
//       NamaAgen: val.customer.nama,
//       NomorTelp: val.customer.no_telp,
//       Alamat: val.customer.alamat_cust_lengkap,
//     });
//   });
//   const [searchText, setSearchText] = useState();
//   const options = {
//     filterType: "dropdown",
//     // filter: true,
//     responsive: "stacked",
//     customSearch: (searchText, row) =>
//       superSearch(searchText.toLowerCase(), { ...row }).numberOfMatches > 0,
//   };

//   return (
//     <React.Fragment>
//       <section className="detail-container d-block">
//         {!isLoading && <PopUp data={data} />}
//         <MUIDataTable
//           title={"ACME Employee list"}
//           data={datas}
//           columns={columns}
//           options={options}
//         />
//         <div className="detail-content d-flex justify-content-center align-item-center m-auto w-100">
//           <div className="d-inline-block w-100">
//             <h2>Request saat ini</h2>
//             <div
//               style={{
//                 height: "100%",
//                 width: "100%",
//                 background: "#FFFFFF",
//                 marginTop: "40px",
//               }}
//             >
//               {console.log(rowx, ">>")}
//             </div>
//           </div>
//         </div>
//         {/* {data?.data.map((val) => {
//           return (
//             <div className="detail-content" style={{ margin: "0 auto" }}>
//               <h2>Request saat ini</h2>

//               <div className="detail-card">
//                 <div className="row label">
//                   <div className="col-lg-6 label-left">
//                     <p>Waktu Request</p>
//                   </div>

//                   <div className="col-lg-6 label-right">
//                     <p>Jenis Transaksi</p>
//                   </div>
//                 </div>

//                 <div className="row label-content">
//                   <div className="col-lg-6 label-left">
//                     <p>{val.created_at}</p>
//                   </div>
//                   <div className="col-lg-6 label-right">
//                     <p>{val.jenis_transaksi}</p>
//                   </div>
//                 </div>

//                 <hr />
//                 <div className="row nominal-content">
//                   <div className="col-lg-6 nominal-left">
//                     <p>Nominal Transaksi</p>
//                   </div>
//                   <div className="col-lg-6 nominal-right">
//                     <p>{val.nominal_transaksi_idr}</p>
//                   </div>
//                 </div>
//                 <hr />

//                 <div className="row label">
//                   <div className="col-lg-6 label-left">
//                     <p>Nama Customer</p>
//                   </div>
//                   <div className="col-lg-6 label-right">
//                     <p>Alamat Customer</p>
//                   </div>
//                 </div>

//                 <div className="row label-content">
//                   <div className="col-lg-6 label-left">
//                     <p>{val.customer.nama}</p>
//                   </div>
//                   <div className="col-lg-6 label-right">
//                     <p>{val.customer.alamat_cust_lengkap}</p>
//                   </div>
//                 </div>

//                 <div className="row label">
//                   <div className="col-lg-6 label-left">
//                     <p>Hubungi Customer</p>
//                   </div>
//                   <div className="col-lg-6 label-right">
//                     <p>Status</p>
//                   </div>
//                 </div>

//                 <div className="row label-content">
//                   <div className="col-lg-6 label-left hubungi-wa">
//                     <img src={IconWa} alt="logo-wa" />
//                     <a
//                       href="https://api.whatsapp.com/send?phone=6282283775912"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       {val.customer.no_telp}
//                     </a>
//                   </div>
//                   <div className="col-lg-6 label-right status-agen">
//                     {true ? (
//                       <p>Menunggu konfirmasi anda</p>
//                     ) : (
//                       <p>Agen dalam perjalanan</p>
//                     )}
//                   </div>
//                 </div>

//                 <div
//                   className="d-flex"
//                   style={{ columnGap: "15px", justifyContent: "flex-end" }}
//                 >
//                   <div className="baris-button">
//                     <button className="btn-action-detail">Tolak</button>
//                   </div>

//                   {true ? (
//                     <div className="baris-button">
//                       <button className="btn-action-detail discard">
//                         Terima
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="baris-button">
//                       <button className="btn-action-detail">adadeh</button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })} */}
//       </section>
//     </React.Fragment>
//   );
// }

// export default DetailRequest;
