import React, { useEffect, useState } from "react";
//plugin
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "react-select";
import Spinner from "assets/img/spinner.svg";
import { DataGrid } from "@material-ui/data-grid";
import { useParams } from "react-router-dom";
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

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "NamaAgen",
    headerName: "Nama Agen",
    width: 200,
    editable: true,
  },
  {
    field: "NomorTelp",
    headerName: "Nomor Telp",
    width: 200,
    editable: true,
  },
  {
    field: "Alamat",
    headerName: "Alamat",
    type: "number",
    width: 200,
    editable: true,
  },
];

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
  const [loading, setLoading] = useState(true);
  const formik = useFormik({
    initialValues: {
      id_cust: localStorage.getItem("id"),
      jenis_layanan: "Laku Pandai",
      jenis_transaksi: "Setor-Pasti",
      nominal_transaksi_idr: "",
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
      nominal_transaksi_idr: Yup.number()
        .typeError("must be number")
        .required(),
      provinsi: Yup.string().required(),
      kabko: Yup.string().required(),
      kecamatan: Yup.string().required(),
      alamat_lengkap: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      await mutate();
    },
  });
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
      console.log(__city, "pelijuh");
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
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dataProv, dataCity, dataDistrict]);
  const { type } = useParams();
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
          />
          <div className="form__wrap">
            <div className="form__title">
              <h1>Jenis Transaksi</h1>
              <div className="lblSetoran text-capitalize">
                {type.replace("_", "-")}
              </div>
            </div>
            <div className="boxInput">
              <div className="formInput">
                <label htmlFor="">Nominal Transaksi</label>
                <input
                  type="text"
                  name="nominal_transaksi_idr"
                  onChange={formik.handleChange}
                />
                {formik.touched.nominal_transaksi_idr &&
                formik.errors.nominal_transaksi_idr ? (
                  <span className="error">
                    {formik.errors.nominal_transaksi_idr}
                  </span>
                ) : null}
              </div>
              <div className="formInput">
                <label htmlFor="">Alamat Lengkap</label>
                <input
                  type="text"
                  name="alamat_lengkap"
                  onChange={formik.handleChange}
                />
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
                        provinsi: e.value,
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
                        kabko: e.value,
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
                        kecamatan: e.value,
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
              <button type="submit" onClick={(e) => formik.handleSubmit(e)}>
                cari agent
              </button>
            </div>
            {/* <div
              style={{
                height: 400,
                width: "100%",
                background: "#FFFFFF",
                marginTop: "40px",
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
              />
            </div> */}
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
