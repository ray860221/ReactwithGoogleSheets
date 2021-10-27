import React, {useState} from 'react';
import styled from 'styled-components'; 

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

interface personInfo {
	name: string
	age: number
	mail: string
	country: string
}

function App() {

	const [postData, setPostData] = useState<personInfo>();

	const funcA = () => {
		console.log('hello');
	}

	return (
		<FormContainer>
			<div>
				<Title>Google Sheets Test</Title>
				<Field>
					<FieldName>Name</FieldName>
					<FieldInput placeholder="Enter your name"/>
				</Field>
				<Field>
					<FieldName>Age</FieldName>
					<FieldInput placeholder="Enter your age"/>
				</Field>
				<Field>
					<FieldName>Mail</FieldName>
					<FieldInput placeholder="Enter your mail"/>
				</Field>
				<Field>
					<FieldName>Country</FieldName>
					<FieldInput placeholder="Enter your country"/>
				</Field>
				<SubmitBtn>Submit</SubmitBtn>
			</div>
		</FormContainer>
	);
}

export default App;
