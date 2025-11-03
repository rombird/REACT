import axios from "axios";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Upload  = ()=>{
    const navigate = useNavigate();
    const [files,setFiles] = useState([])


    const fileChangeHandler = (e)=>{
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.files);
       
        //console.log(e.target.files[0]);
        // 파일 선택시 console.log로 출력(업로드 될때마다(변경될때마다) 수정)
        for(let idx in e.target.files)
            console.log(e.target.files[idx]);
        
        //유효성 체크(생략)

        //
        setFiles(e.target.files);

    }
    const uploadHandler = (e)=>{
        //UPLOAD 
        const formData = new FormData();
        for(let idx in files) // files안에 있는 인덱스를꺼내서 폼데이터에 전달
            formData.append("files",files[idx])
        axios
        .post(
          `http://localhost:8080/upload`,                       // URL
          formData,                                             // FORMDATA(BODY)
          { headers: {'Content-Type' :'multipart/form-data' } } // HEADER
        )
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
            console.error('error.response.data', error.response.data);
            navigate('/exception', { state: { message: error.response.data.message, status: error.response?.status } } );
        });
    }

    return (
        
        <div>
            <h1>파일 업로드 TEST(REACT-SPRINGBOOT)</h1>
            <input type="file" name="file"  onChange={fileChangeHandler} multiple />
            <button onClick={uploadHandler}>UPLOAD</button>
        </div>
    )

}

export default Upload;
