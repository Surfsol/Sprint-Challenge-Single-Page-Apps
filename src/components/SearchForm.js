import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {withFormik, Form, Field} from 'formik'
import * as Yup from "yup"; 



function SearchForm ({props,values, errors, touched, status }) { //props passed down from withFormik componenet
    // touched. This prop keeps track of whether you’ve been in this field previously.
    // errors - for Yup
    console.log(props)
    const [people, setPeople] = useState([])
    useEffect (() => {
        if(status){
            setPeople([...people, status]);
        }
    }, [status]);

      return (
        <div>  
        <Form> 
            <div>
                <Field type="name" name="name" placeholder="name"/>
                {touched.name && errors.name && <p>errors.name</p>}
            </div>
            
            <button>Submit!</button>
        </Form>
        {people.map(e => (
            <ul key={e.id}>
                <li>e.name</li>
                <li>e.species</li>
                <li>e.status</li>
                <li>e.type</li>
            </ul>
        ))}
        </div>
      )
    }
    const FormikSearchForm = withFormik({
      mapPropsToValues({ name }) {  //goes with Field name = , from above
        return {
          name: name || "",
        };
      },
    
      validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('Please provide your name.'),
      }),
    
        handleSubmit(values, { setStatus }) {
        console.log(values);
        //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
        axios
            .post ("https://rickandmortyapi.com/api/character/", values)
            .then(res => {
                setStatus(res.data);

            })
            .catch(err => console.log(err.res));
      }
        
    })(SearchForm);
    export default FormikSearchForm;
    
 
  
 
 