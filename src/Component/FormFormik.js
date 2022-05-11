import React, {useState,useEffect}from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Country from './Countries'
import '../App.css'

function FormFormik() {
   const initialValues={
      Surname:'',
      MiddleName:'',
      LastName:"",
      Email:'',
      Telephone:'', 
      country:'',
      gender:"",
      dob:'',
      marital:'',
      houseNumber:'',
      baptiseWho:''
     

   }
   const onSubmit=(values)=>{
   console.log(values)
   }
   const phoneRegExp=/^([0]{1})[0-9]{10}$/
   const validationSchema=Yup.object({
      Surname:Yup.string().required("Field Required"),
      MiddleName:Yup.string().required("Field Required"),
      LastName:Yup.string().required("Field Required"),
     Email:Yup.string().email("Invalid E-mail !").required('Field required'),
     Telephone:Yup.string().matches(phoneRegExp,"Invalid Phone Number").required("Field required"),
     country:Yup.string().required('Select a country !!!'),
     houseNumber:Yup.string().required('Enter house Number !!!'),
     gender:Yup.string().required("Field Required"),
     dob:Yup.string().required("Field Required"),
     marital:Yup.string().required("Field Required"),
     baptiseWho:Yup.string().required('Field Required !!!'),
   })
  return (
    <div className='regForm'>
    <div   className='container'>
    
   

    <div className='mt-5' >
      
    <section className='mt-5' id="login">
    <div className="mt-5">
      <div className="mt-5">
        <div className="col-md-9 mx-auto">
          <div className="card mt-5 shadow-lg">
           
            <div className="card-body">
           
             <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
               <Form>
              
               {/*Field name row*/}
            <aside className='card'>
            <div className='card-header text-white h5' style={{backgroundColor:"#7a9759"}}>Contact Information</div>
            <section className='card-body'>
            <div className="form-group row">
            <div className='col-lg-4 col-md-5'>
            <label htmlFor="text">Surname</label> 
            <ErrorMessage name='Surname'>
               {
                 errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
               }
            </ErrorMessage>
            <Field type="text" name="Surname"  className="form-control" />
            </div>
           <div className='col-lg-4 col-md-5'>
           <label htmlFor="password">Middle Name</label>
           <ErrorMessage name='MiddleName'>
           {
             errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
           }
        </ErrorMessage>
           <Field type="text" name="MiddleName" className="form-control" />
           </div>
           <div className='col-lg-4 col-md-5'>
           <label htmlFor="password">Last Namegit init</label>
           <ErrorMessage name='LastName'>
           {
             errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
           }
        </ErrorMessage>
           <Field type="text" name="LastName"  className="form-control" />
           </div>
          </div>

          <div className='form-group row mt-3'>
          <div className='col-lg-6 col-md-7'>
          <label htmlFor="text">Telephone<sup className='text-danger h6'>*</sup></label>
          <ErrorMessage name='Telephone'>
          {
            errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
          }
       </ErrorMessage>
          <Field type="text" name="Telephone"  className="form-control" />
          </div>
         <div className='col-lg-6 col-md-7'>
         <label htmlFor="password">E-mail<sup className='text-danger h6'>*</sup></label>
         <ErrorMessage name='Email'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
         <Field type="text" name="Email"  className="form-control" />
         </div>
          </div>

          
            </section>
            </aside>
         {/*Field name row*/}

         <aside className='card mt-3'>
         <div className='card-header text-white h5' style={{backgroundColor:"#7a9759"}}>Mailing Home Address</div>
         <section className='card-body'>
        
         <div className="form-group row">
         <div className='col-lg-6 col-md-7'>
         <label htmlFor="text">Country</label><ErrorMessage name='country'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
         <Field as="select" className="form-control" name="country">
         <option >-----</option>
         {Country.map((cty,i)=><React.Fragment key={i}><option value={cty.name}>{cty.name}</option></React.Fragment>)}
       </Field>
         </div>
        <div className='col-lg-6 col-md-7'>
        <label htmlFor="password">House Number</label>
        <ErrorMessage name='houseNumber'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
        <Field type="Number" name="houseNumber"  className="form-control" />
        </div>
        
       </div>

      

       
         </section>
         </aside>
         

         <aside className='card mt-3'>
         <div className='card-header text-white h5' style={{backgroundColor:"#7a9759"}}>Identification:-</div>
         <section className='card-body'>
        
         <div className="form-group row">
         <div className='col-lg-6 col-md-7'>
         <label htmlFor="text">Gender</label>
         <ErrorMessage name='gender'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
         <Field as="select" className="form-control" name="gender">
         <option >-----</option>
         <option value="Male">Male</option>
         <option value="Female">Female</option>
       </Field>
         </div>
        
        <div className='col-lg-6 col-md-7'>
        <label htmlFor="password">Marital Status</label>
        <ErrorMessage name='marital'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
        <Field as="select" className="form-control" name="marital">
        <option >------</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
      </Field>
        </div>
       </div>
  </section>

         </aside>
         <aside className='card mt-3'>
         <div className='card-header text-white h5' style={{backgroundColor:"#7a9759"}}>Baptisms Information:-</div>
         <section className='card-body'>
        
         <div className="form-group row">
         
        <div className='col-lg-6 col-md-7'>
        <label htmlFor="">DOB</label>
        <ErrorMessage name='dob'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
        <Field type="date" name="dob"  className="form-control" />
        </div> 
        <div className='col-lg-6 col-md-7'>
        <label htmlFor="">Baptize by who?</label>
        <ErrorMessage name='baptiseWho'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
        <Field type="text" name="baptiseWho"  className="form-control" />
        </div> 
       </div>
       
  </section>
         </aside>


        
         

              
             
               

               <div className='text-right mt-3' style={{textAlign:'right'}}>
                <button style={{backgroundColor:"#7a9759"}} type='submit' className='btn text-white btn-lg'>SUBMIT</button>
               </div>
               
            
               </Form>
             </Formik>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

     

    </div>

</div>

    </div>
  )
}

export default FormFormik;
