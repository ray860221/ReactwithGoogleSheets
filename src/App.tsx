import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'

const FormContainer = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
	font-family: -webkit-pictograph;
	padding-top: 200px;
`;
const Title = styled.div`
	font-size: 28px;
	margin-bottom: 20px;
	font-weight: bold;
`;
const Field = styled.div`
	padding: 12px 0;
`;
const FieldName = styled.div`
	margin-bottom: 4px;
    font-size: 18px;
`;
const FieldInput = styled.input`
	border-radius: 4px;
	border-radius: 4px;
	border: 1px solid #dbdbdb;
	outline: none;
	width: 300px;
	font-size: 16px;
    padding: 8px 12px;
	::placeholder {
		color: #dbdbdb;
	}
	&:focus {
		border: 1px solid #6a8cd3;
		::placeholder {
			color: #a3a3a3;
		}
	}
`;
const SubmitBtn = styled.div`
	margin-top: 24px;
    border: 1px solid;
    display: inline-block;
    padding: 8px 12px;
    border-radius: 4px;
	cursor: pointer;
`;

type personInfo = {
	name: string
	age: number
	mail: string
	country: string
}

function App() {

	const [postData, setPostData] = useState<personInfo>({
		name: '',
		age: 0,
		mail: '',
		country: '',
	});

	return (
		<FormContainer>
			<div>
				<Title>Google Sheets Test</Title>
				<Field>
					<FieldName>Name</FieldName>
					<FieldInput placeholder="Enter your name" onChange={(e)=> setPostData({...postData, name:e.target.value})}/>
				</Field>
				<Field>
					<FieldName>Age</FieldName>
					<FieldInput placeholder="Enter your age" onChange={(e)=> setPostData({...postData, age:parseInt(e.target.value)})}/>
				</Field>
				<Field>
					<FieldName>Mail</FieldName>
					<FieldInput placeholder="Enter your mail" onChange={(e)=> setPostData({...postData, mail:e.target.value})}/>
				</Field>
				<Field>
					<FieldName>Country</FieldName>
					<FieldInput placeholder="Enter your country" onChange={(e)=> setPostData({...postData, country:e.target.value})}/>
				</Field>
				<SubmitBtn onClick={()=> {
					axios.post('https://sheet.best/api/sheets/636b77a8-8815-4dec-ac25-48026117f6f3', postData)
					.then(response => {
					  console.log(response);
					})
				}}>Submit</SubmitBtn>
			</div>
		</FormContainer>
	);
}

export default App;
