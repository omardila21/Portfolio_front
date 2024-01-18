
import '../../App.css';

const Footer = () => {
  return (
<div className='App-footer'>
    <tr>
        <th className='Git'>
        </th>
        <th className='tex'><a href="https://github.com/omardila21">GITHUB</a>
        </th>
        <th className='Linkedin'>
        </th>
        <th className='tex'><a href="https://www.linkedin.com/in/omarardila">LINKEDIN</a>
        </th>
        <th> 
        <section
        className="w-full text-center text-white m-5 px-4 flex flex-col md:flex-row  gap-5 md:justify-between md:w-5/6 lg:gap-24 md:px-6
       items-center">
        <p className='tex'>Omar Andrés Ardila Páez Omardilap © 2023</p>
      </section>
        </th>
      </tr>
    
</div>
  );
};

export default Footer;