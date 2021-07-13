import React, { useState } from 'react'
import { Input } from 'antd';
import { DatePicker, Space, TimePicker, Select } from 'antd';
import './addGig.scss'
import { UploadOutlined } from '@ant-design/icons'
import Multiselect from 'multiselect-react-dropdown';
import artist from '../assests/artist1.png'


const { Option } = Select;
function AddGig() {

    const [image, setImage] = useState("")
    const [selectedValue, setSelectedValue] = useState('')
    const [options, setOptions] = useState([{ name: 'Option 1️⃣', id: 1 }, { name: 'Option 2️⃣', id: 2 }])
    function onChangeDate(date, dateString) {
        console.log(date, dateString);
    }
    function onChangeTime(date, dateString) {
        console.log(date, dateString);
    }
    let base64String = '';

    function imageUploaded(img) {
        var file = img;

        setImage(URL.createObjectURL(file));
    }

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>SOLO</Option>);
    }

    const Artists = [];
    const [selectedArtists, setSelectedArtists] = useState([]);
    for (let i = 10; i < 36; i++) {
        Artists.push(<Option key={i.toString(36) + i}><div className="aristSelect">
            <div className="artistImage"><img src={artist} /></div>
            <div className="artistDet">
                <h6>Stricly Acoustic</h6>
                <p>1K followers</p>
            </div>
        </div>
        </Option>);
    }
    const [artistSelectValue, setArtistSelectValue] = useState('')
    function handleChange(value) {
        setSelectedArtists(value);
        console.log(value)
        setArtistSelectValue('')
        setArtistSelectValue(value.length + ' artist selected')
    }

    function onSelect(selectedList, selectedItem) {
        console.log(selectedItem)
    }

    function onRemove(selectedList, removedItem) {
        console.log(removedItem)
    }


    return (
        <div className="addGig col-lg-12">
            <h4 className="mb-4">Artists</h4>
            <div className="addGigForm">
                <div className="inputDiv">
                    <Input className="input col-lg-6" placeholder="Gig Name" />
                </div>
                <div className="inputDiv">
                    <DatePicker placeholder="Date" className="input col-lg-6" onChange={onChangeDate} />
                    <TimePicker placeholder="Time" className="input col-lg-6" onChange={onChangeTime} />
                </div>
                <div className="inputDiv">
                    <Input className=" input col-lg-6" placeholder="Gig Description" />
                </div>
                <div className="uploadImage">
                    <div className="upload">
                        <p>Gig Image</p>
                        {!image ?
                            <label className="uploadInput col-lg-6">
                                <input type="file" onChange={(e) => imageUploaded(e.target.files[0])} />
                                <UploadOutlined />
                            </label>
                            :
                            <div className="col-lg-6 gigImage" style={{ backgroundImage: `url('${image}')` }}>
                                <button className="editButn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5533 2.46171L9.49826 0.406685C9.23005 0.154754 8.87859 0.0101998 8.51075 0.000519574C8.1429 -0.00916062 7.78432 0.116709 7.50324 0.354185L0.753161 7.10426C0.510732 7.34874 0.359785 7.66917 0.325656 8.01177L0.00315225 11.1393C-0.00695114 11.2492 0.00730304 11.3599 0.0448986 11.4636C0.0824942 11.5673 0.142505 11.6615 0.220655 11.7393C0.290735 11.8088 0.373848 11.8638 0.465228 11.9011C0.556607 11.9385 0.654455 11.9574 0.753161 11.9568H0.820661L3.9482 11.6718C4.2908 11.6377 4.61123 11.4867 4.85571 11.2443L11.6058 4.49423C11.8678 4.21745 12.0094 3.8481 11.9995 3.46712C11.9897 3.08614 11.8292 2.72459 11.5533 2.46171ZM3.81319 10.1718L1.56317 10.3818L1.76567 8.13177L6.00322 3.94672L8.02824 5.97175L3.81319 10.1718ZM9.00325 4.96674L6.99323 2.95671L8.45575 1.4567L10.5033 3.50422L9.00325 4.96674Z" fill="#333333" />
                                    </svg>

                                </button>
                            </div>
                        }
                    </div>
                </div>
                <div className="inputDiv">
                    {/* <Multiselect
                        options={options} // Options to display in the dropdown
                        selectedValues={selectedValue} // Preselected value to persist in dropdown
                        onSelect={onSelect} // Function will trigger on select event
                        onRemove={onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                    /> */}



                    <Select
                        className="input col-lg-6 col-md-6 col-sm-12 artistSelectInput"
                        mode="multiple"
                        allowClear
                        // style={{ width: '100%' }}
                        placeholder="Please select"
                        bordered={false}
                        onChange={handleChange}
                        placeholder={artistSelectValue}



                    >
                        {Artists}
                    </Select>

                    <Select
                        className="input col-lg-6 col-md-6 col-sm-12"
                        showSearch
                        // style={{ width: 200 }}
                        placeholder="Select Venue"
                        optionFilterProp="children"
                        bordered={false}
                    // onChange={onChange}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    // onSearch={onSearch}
                    // filterOption={(input, option) =>
                    //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    // }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </div>
                <div className="inputDiv col-lg-12">
                    <Select
                        className="input col-lg-6 col-md-6 col-sm-12"
                        mode="multiple"
                        allowClear
                        // style={{ width: '100%' }}
                        placeholder="Please select"
                        defaultValue={['a10', 'c12']}
                        bordered={false}
                    // onChange={handleChange}
                    >
                        {children}
                    </Select>
                    <div className="col-lg-6">
                        <button className="saveGigBtn">Save Gig</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddGig
