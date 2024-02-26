import *as React from "react"; 
import "../../App.css";
import html5Image from '../../Pictures/html5.png'
import cssImage from '../../Pictures/css-3.png'
import javaImage from '../../Pictures/java.png'
import jsImage from '../../Pictures/js.png'
import pythonImage from '../../Pictures/python.png'
import mysqlImage from '../../Pictures/mysql.png'
import postImage from '../../Pictures/postgra.png'
import angImage from '../../Pictures/angular.png'
import reacImage from '../../Pictures/react.png'
import vueImage from '../../Pictures/vue.png'
import djangoImage from '../../Pictures/django.png'
import nodImage from '../../Pictures/node.png'

const MainPresentacion = () =>{
    return (
      <section id= "aboutMeSection">
      <h2 style={{ fontSize: '35px', textAlign: 'justify', marginLeft: '3%' }}>About me</h2>
      <p>&nbsp;</p>
      <p>Hello, let me introduce myself. My name is Omar Ardila, a Geological Engineer graduated from the University of the Andes in Venezuela. Since the pandemic, I ventured into the IT field, acquiring knowledge of various programming languages.</p>
      <p> I possess great adaptability to different languages and frameworks. I hope to be of interest to you and discuss any job opportunities.</p>
      <p style={{textAlign: 'center'}}> The technologies I feel comfortable working with are as follows:</p>
      <p>&nbsp;</p>
      <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ marginBottom: '30px' }}></p>
        <div style={{ overflow: 'hidden', width: '60%', position: 'relative' }}>
            <table style={{ animation: 'moveLeft 15s linear infinite',}}>
              <thead>
                <tr>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={html5Image} alt="HTML"style={{ width: '100%', marginBottom: '15px' }}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        HTML
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={cssImage} alt="CSS"style={{  width: '100%', marginBottom: '15px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        CSS
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={pythonImage} alt="Python"style={{ width: '100%', marginBottom: '15px' }}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        PYTHON
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={jsImage} alt="Javascript"style={{width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        JAVASCRIPT
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={javaImage} alt="Java"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        JAVA
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={mysqlImage} alt="Mysql"style={{width: '100%', marginBottom: '15px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        MYSQL
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={postImage} alt="Postgre"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        POSTGRESQL
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={reacImage} alt="React"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        REACT.JS
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={djangoImage} alt="Django"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        DJANGO
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={vueImage} alt="vue"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        VUE.JS
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={angImage} alt="Angular"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        ANGULAR
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={nodImage} alt="Node"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        NODE.JS
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={html5Image} alt="HTML"style={{ width: '100%', marginBottom: '15px' }}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        HTML
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={cssImage} alt="CSS"style={{  width: '100%', marginBottom: '15px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        CSS
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={pythonImage} alt="Python"style={{ width: '100%', marginBottom: '15px' }}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        PYTHON
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={jsImage} alt="Javascript"style={{width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        JAVASCRIPT
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={javaImage} alt="Java"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        JAVA
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={mysqlImage} alt="Mysql"style={{width: '100%', marginBottom: '15px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        MYSQL
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={postImage} alt="Postgre"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        POSTGRESQL
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={reacImage} alt="React"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        REACT.JS
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={djangoImage} alt="Django"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        DJANGO
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={vueImage} alt="vue"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        VUE.JS
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={angImage} alt="Angular"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        ANGULAR
                      </span>
                    </div>
                  </th>
                  <th style={{ position: 'relative', width: '100px' }}>
                    <div style={{ position: 'relative', width: '100px', margin: '0 auto'}}>
                    <img src={nodImage} alt="Node"style={{ width: '100%', marginBottom: '25px'}}/>
                      <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textAlign: 'center', color: 'black', width: '100%', backgroundColor: 'white', padding: '5px',}}>
                        NODE.JS
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
          </table>    
        </div>
        </div>
      </section>
    )
  
  }
  export default MainPresentacion