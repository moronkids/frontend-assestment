import React, { useCallback, useEffect, useState } from "react";
//plugin
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "react-select";
import Spinner from "assets/img/spinner.svg";
import { DataGrid } from "@material-ui/data-grid";
import { useParams } from "react-router-dom";
import { useHistory, useRouter } from "react-router";
import { debounce } from "lodash";
//query
import {
  useMutation,
  useQuery,
  QueryClient,
  useQueryClient,
} from "react-query";
import {
  getAvailAgent,
  getCity,
  getDistrict,
  getProvince,
  postTransaction,
} from "api/transactions";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#ffffff",
    border: "1px solid #333333",
    boxSizing: "border-box",
    borderRadius: " 10px",
    height: " 60px",
  }),
};

const rows = [
  { id: 1, NamaAgen: "Snow", NomorTelp: "Jon", Alamat: 35 },
  { id: 2, NamaAgen: "Lannister", NomorTelp: "Cersei", Alamat: 42 },
  { id: 3, NamaAgen: "Lannister", NomorTelp: "Jaime", Alamat: 45 },
  { id: 4, NamaAgen: "Stark", NomorTelp: "Arya", Alamat: 16 },
  { id: 5, NamaAgen: "Targaryen", NomorTelp: "Daenerys", Alamat: null },
  { id: 6, NamaAgen: "Melisandre", NomorTelp: null, Alamat: 150 },
  { id: 7, NamaAgen: "Clifford", NomorTelp: "Ferrara", Alamat: 44 },
  { id: 8, NamaAgen: "Frances", NomorTelp: "Rossini", Alamat: 36 },
  { id: 9, NamaAgen: "Roxie", NomorTelp: "Harvey", Alamat: 65 },
];

function FormTransaction() {
  const [province, setProvince] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [agentResult, setAgentResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jenis_trx, setJenis_trx] = useState("");
  const formik = useFormik({
    initialValues: {
      id_cust: parseInt(localStorage.getItem("id")),
      jenis_layanan: "",
      jenis_transaksi: "",
      nominal_transaksi_idr: 0,
      provinsi: "",
      kabko: "",
      kecamatan: "",
      alamat_lengkap: "",
    },
    // validate,
    validationSchema: Yup.object().shape({
      id_cust: Yup.number().required("sdsd"),
      jenis_layanan: Yup.string().required("sdsd"),
      jenis_transaksi: Yup.string().required(),
      nominal_transaksi_idr: Yup.number().required(),
      provinsi: Yup.string().required(),
      kabko: Yup.string().required(),
      kecamatan: Yup.string().required(),
      alamat_lengkap: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      await mutate();
      // await setAgentResult(data);
    },
  });
  const changeHandler = (val, datas) => {
    formik.setValues({
      ...formik.values,
      [val]: datas,
    });
  };
  const debouncedChangeHandler = useCallback(
    (e, datas) => debounce(changeHandler(e, datas), 300),
    []
  );

  const {
    isLoading: loadingProv,
    isError: isErrorProv,
    data: dataProv,
    error: errorProv,
    refetch: refetchProv,
  } = useQuery("getProvince", async (e) => await getProvince(), {
    refetchInterval: false,
    // enabled: false, // turned off by default, manual refetch is needed
  });
  //   const {
  // isLoading: loadingCity,
  // isError: isErrorCity,
  // data: dataCity,
  // error: errorCity,
  // refetch: refetchCity,
  //   } = useQuery("getCity", async (e) => await getCity(e), {
  //     refetchInterval: false,
  //     enabled: false, // turned off by default, manual refetch is needed
  //   });
  let data__ = {};
  const {
    isLoading: loadingCity,
    isError: isErrorCity,
    data: dataCity,
    error: errorCity,
    mutate: mutateCity,
  } = useMutation("getCity", async (e) => getCity(e), {
    enabled: false,
  });
  const {
    isLoading: loadingDistrict,
    isError: isErroDistrict,
    data: dataDistrict,
    error: errorDistrict,
    mutate: mutateDistrict,
  } = useMutation("getDistrict", async (e) => getDistrict(e), {
    enabled: false,
  });
  const { isLoading, isError, data, error, mutate } = useMutation(
    "getAvailAgent",
    async (e) => getAvailAgent(formik.values),
    {
      enabled: false,
    }
  );
  let history = useHistory();
  const {
    isLoading: isLoadingTrx,
    isError: isErrorTrx,
    data: dataTrx,
    error: errorTrx,
    mutate: mutateTrx,
  } = useMutation("postTrx", async (e) => postTransaction(e), {
    enabled: false,
    onSuccess: () => {
      history.push({
        pathname: "/home",
      });
    },
  });

  const selectCity = async (val) => {
    console.log(val, "isinyapaxxkota");
    data__ = {
      id: val.value,
      name: val.label,
    };
    console.log(data__, "isinyapali");
    await mutateCity(data__);
  };
  const selectDistrict = async (val) => {
    data__ = {};
    console.log(val, "isinyapaxx");
    const split = val.value.split("_");
    const id = split[0];
    const province_id = split[1];
    data__ = {
      id: id,
      province_id: province_id,
      name: val.label,
    };
    await mutateDistrict(data__);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "NamaAgen",
      headerName: "Nama Agen",
      width: 150,
      editable: true,
    },
    {
      field: "NomorTelp",
      headerName: "Nomor Telp",
      width: 150,
      editable: true,
    },
    {
      field: "Alamat",
      headerName: "Alamat",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "Rating",
      headerName: "Rating",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 200,
      renderCell: (cellValues) => {
        console.log(cellValues.row.id_agent, ">>ambilid");
        const data = {
          ...formik.values,
          id_agen: cellValues.row.id_agent,
        };
        console.log(data, ">>ambilid");
        return (
          <button className="btn btn-primary" onClick={(e) => mutateTrx(data)}>
            Select
          </button>
        );
      },
    },
  ];

  const jenis_layanan = [
    { value: "Laku Pandai", label: "Laku Pandai" },
    { value: "Mini ATM BRI", label: "Mini ATM BRI" },
    { value: "Tunai", label: "Tunai" },
  ];
  let laku_pandai = [
    { value: "Cash-in & Out", label: "Cash-in & Out" },
    { value: "Report", label: "Report" },
    { value: "Setoran Uang", label: "Setoran Uang" },
    { value: "Tarik Tunai", label: "Tarik Tunai" },
    { value: "Isi Ulang Pulsa", label: "Isi Ulang Pulsa" },
    { value: "Belanja Merchant", label: "Belanja Merchant" },
  ];
  let mini_atm = [
    { value: "Setoran Pinjaman", label: "Setoran Pinjaman" },
    { value: "Setoran Simpanan", label: "Setoran Simpanan" },
    { value: "Tarik Tunai", label: "Tarik Tunai" },
  ];
  let tunai = [
    { value: "Registrasi Mobile Banking", label: "Registrasi Mobile Banking" },
    {
      value: "Registrasi Internet Banking",
      label: "Registrasi Internet Banking",
    },
    { value: "Informasi Rekening", label: "Informasi Rekening" },
    { value: "Transfer Pembayaran", label: "Transfer Pembayaran" },
    { value: "Isi Ulang Pulsa", label: "Isi Ulang Pulsa" },
    { value: "Setor - Pasti", label: "Setor - Pasti" },
  ];
  useEffect(() => {
    const __province = [];
    const __city = [];
    const __district = [];
    console.log(dataProv, ">>tess");
    if (dataProv?.data?.length > 0) {
      dataProv?.data?.map((val, i) => {
        __province.push({
          value: val.Id,
          label: val.Name,
        });
      });
      setProvince(__province);
    }
    if (dataCity?.data?.length > 0) {
      dataCity?.data?.map((val, i) => {
        __city.push({
          value: val.Id + "_" + val.Province_id,
          label: val.Name,
        });
      });
      setCity(__city);
    }
    if (dataDistrict?.data?.length > 0) {
      dataDistrict?.data?.map((val, i) => {
        __district.push({
          value: val.Id,
          label: val.Name,
        });

        setDistrict(__district);
      });
    }
    console.log(data, ">>testing");
    if (data?.data?.list_rekomendasi_agen !== null) {
      const datas = [];
      data?.data?.list_rekomendasi_agen.map((val, i) => {
        datas.push({
          id: i + 1,
          id_agent: val.id_agen,
          NamaAgen: val.nama_agen,
          NomorTelp: val.no_telp,
          Rating: val.rating,
          Alamat: val.alamat_lengkap.length > 0 ? val.alamat_lengkap : "dummy",
        });
      });
      console.log(datas, ">>lolo");
      setAgentResult(datas);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [
    dataProv,
    dataCity,
    dataDistrict,
    data,
    jenis_trx,
    setJenis_trx,
    formik.values.jenis_layanan,
  ]);
  const { type } = useParams();
  const tesDebounce = debounce((e) => {
    // alert(e.target.name);
    formik.setValues({
      ...formik.values,
      [e.target.name]: parseInt(e.target.value) || e.target.value,
    });
  }, 500);
  return (
    <React.Fragment>
      {loading ? (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center m-auto">
          <img src={Spinner} alt="" width={150} height={150} srcset="" />
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="id_cust"
            value={localStorage.getItem("id")}
            onChange={formik.handleChange}
            hidden
          />
          <div className="form__wrap">
            <div className="form__title">
              <h1>Transaksi</h1>
              {/* <div className="lblSetoran text-capitalize">
                {type.replace("_", "-")}
              </div> */}
            </div>
            <div className="boxInput">
              <div className="formInput">
                <label htmlFor="">Nominal Transaksi</label>
                <input
                  type="number"
                  name="nominal_transaksi_idr"
                  onChange={(e) => tesDebounce(e)}
                />
                {formik.touched.nominal_transaksi_idr &&
                formik.errors.nominal_transaksi_idr ? (
                  <span className="error">
                    {formik.errors.nominal_transaksi_idr}
                  </span>
                ) : null}
              </div>
              <div
                className="formInput"
                style={
                  {
                    // paddingBottom: "35px",
                  }
                }
              >
                <label htmlFor="">Jenis Layanan</label>
                <Select
                  styles={customStyles}
                  options={jenis_layanan}
                  name="jenis_layanan"
                  id="jenis_layanan"
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      jenis_layanan: e.label,
                      jenis_transaksi: null,
                    });
                    setJenis_trx(null);
                    laku_pandai = null;
                    mini_atm = null;
                    tunai = null;
                    // document.getElementById("jenis_transaksi").remove();
                    alert("sds");
                  }}
                />
                {formik.touched.jenis_layanan && formik.errors.jenis_layanan ? (
                  <span className="error">{formik.errors.jenis_layanan}</span>
                ) : null}
              </div>
              <div
                className="formInput"
                style={
                  {
                    // paddingBottom: "35px",
                  }
                }
              >
                <label htmlFor="">Jenis Transaksi</label>
                <Select
                  isClearabel={true}
                  styles={customStyles}
                  options={
                    formik.values.jenis_layanan === "Laku Pandai"
                      ? laku_pandai
                      : formik.values.jenis_layanan === "Tunai"
                      ? tunai
                      : formik.values.jenis_layanan === "Mini ATM BRI"
                      ? mini_atm
                      : null
                  }
                  name="jenis_transaksi"
                  id="jenis_transaksi"
                  // values={jenis_trx || ""}
                  // value={options.value}
                  label={jenis_trx || ""}
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      jenis_transaksi: e.value,
                    });
                    setJenis_trx(e.value);
                  }}
                />
                {formik.touched.jenis_transaksi &&
                formik.errors.jenis_transaksi ? (
                  <span className="error">{formik.errors.jenis_transaksi}</span>
                ) : null}
              </div>
              <div className="formInput">
                <label htmlFor="">Alamat Lengkap</label>
                <input
                  type="text"
                  name="alamat_lengkap"
                  onChange={(e) => tesDebounce(e)}
                />
                {console.log(formik.values)}
                {formik.touched.alamat_lengkap &&
                formik.errors.alamat_lengkap ? (
                  <span className="error">{formik.errors.alamat_lengkap}</span>
                ) : null}
              </div>
              <div className="formInput__dropdown">
                <div>
                  <label htmlFor="">Provinsi</label>
                  <Select
                    styles={customStyles}
                    options={province}
                    onChange={(e) => {
                      selectCity(e);
                      formik.setValues({
                        ...formik.values,
                        provinsi: e.label,
                      });
                    }}
                    name="provinsi"
                  />
                  {formik.touched.provinsi && formik.errors.provinsi ? (
                    <span className="error">{formik.errors.provinsi}</span>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="">Kabupaten/ Kota</label>
                  <Select
                    styles={customStyles}
                    options={city}
                    name="kabko"
                    onChange={(e) => {
                      selectDistrict(e);
                      formik.setValues({
                        ...formik.values,
                        kabko: e.label,
                      });
                    }}
                  />
                  {formik.touched.kabko && formik.errors.kabko ? (
                    <span className="error">{formik.errors.kabko}</span>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="">Kecamatan</label>
                  <Select
                    styles={customStyles}
                    options={district}
                    name="kecamatan"
                    onChange={(e) =>
                      formik.setValues({
                        ...formik.values,
                        kecamatan: e.label,
                      })
                    }
                  />
                  {formik.touched.kecamatan && formik.errors.kecamatan ? (
                    <span className="error">{formik.errors.kecamatan}</span>
                  ) : null}
                </div>
              </div>
            </div>
            <div>
              {console.log(formik.errors, "sdsd")}
              <button
                className="btn btn-secondary mt-4"
                type="submit"
                onClick={(e) => formik.handleSubmit(e)}
              >
                cari agent
              </button>
            </div>
            <div
              style={{
                height: 400,
                width: "100%",
                background: "#FFFFFF",
                marginTop: "40px",
              }}
            >
              <DataGrid
                rows={agentResult}
                columns={columns}
                pageSize={5}
                // checkboxSelection
                disableSelectionOnClick
              />
              {/* {data?.data?.list_rekomendasi_agen?.map((val, i) => {
              console.log(val, ">>hehe");
              return (
                <>
                  <div className="">{val.kecamatan}</div>
                </>
              );
            })} */}
            </div>
          </div>
        </form>
      )}
    </React.Fragment>
  );
}
//   formik.setValues({
//     ...formik.values,
//     occupation_detail: e.value,
//   });

export default FormTransaction;
