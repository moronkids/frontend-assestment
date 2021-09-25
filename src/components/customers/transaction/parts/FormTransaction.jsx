import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Spinner from 'assets/img/spinner.svg'
import { DataGrid } from '@material-ui/data-grid';
import { useParams } from 'react-router-dom';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: '#ffffff',
        border: '1px solid #333333',
        boxSizing: 'border-box',
        borderRadius: ' 10px',
        height: ' 60px'
    })
}

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'NamaAgen',
        headerName: 'Nama Agen',
        width: 200,
        editable: true,
    },
    {
        field: 'NomorTelp',
        headerName: 'Nomor Telp',
        width: 200,
        editable: true,
    },
    {
        field: 'Alamat',
        headerName: 'Alamat',
        type: 'number',
        width: 200,
        editable: true,
    }
];

const rows = [
    { id: 1, NamaAgen: 'Snow', NomorTelp: 'Jon', Alamat: 35 },
    { id: 2, NamaAgen: 'Lannister', NomorTelp: 'Cersei', Alamat: 42 },
    { id: 3, NamaAgen: 'Lannister', NomorTelp: 'Jaime', Alamat: 45 },
    { id: 4, NamaAgen: 'Stark', NomorTelp: 'Arya', Alamat: 16 },
    { id: 5, NamaAgen: 'Targaryen', NomorTelp: 'Daenerys', Alamat: null },
    { id: 6, NamaAgen: 'Melisandre', NomorTelp: null, Alamat: 150 },
    { id: 7, NamaAgen: 'Clifford', NomorTelp: 'Ferrara', Alamat: 44 },
    { id: 8, NamaAgen: 'Frances', NomorTelp: 'Rossini', Alamat: 36 },
    { id: 9, NamaAgen: 'Roxie', NomorTelp: 'Harvey', Alamat: 65 },
];
function FormTransaction() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])
    const { type } = useParams()
    return (
        <React.Fragment>
            {loading ?          <div className="w-100 h-100 d-flex justify-content-center align-items-center m-auto">
      <img src={Spinner} alt="" width={150} height={150} srcset="" />
      </div>: <div className="form__wrap">
                <div className="form__title">
                    <h1>Jenis Transaksi</h1>
                    <div className="lblSetoran text-capitalize">
                        {type.replace('_', '-')}
                    </div>
                </div>
                <div className="boxInput">
                    <div className="formInput">
                        <label htmlFor="">Nominal Transaksi</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Nominal Transaksi</label>
                        <input type="text" />
                    </div>
                    <div className="formInput__dropdown">
                        <div>
                            <label htmlFor="">Provinsi</label>
                            <Select styles={customStyles} options={options} />
                        </div>
                        <div>
                            <label htmlFor="">Kabupaten/ Kota</label>
                            <Select styles={customStyles} options={options} />
                        </div>
                        <div>
                            <label htmlFor="">Kecamatan</label>
                            <Select styles={customStyles} options={options} />
                        </div>


                    </div>
                </div>
                <div style={{ height: 400, width: '100%', background: '#FFFFFF', marginTop: '40px' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
            </div>}
        </React.Fragment>
    )
}

export default FormTransaction
