
import '../../App.css';

const Footer = () => {
  return (
<div className='App-footer'>
  <table>
    <thead>
      <tr>
      <th>
        <div className='tex' style={{ marginLeft: '0%' }}>Omar Andrés Ardila Páez© 2023</div>
        </th>
        <th className='cv'>
          <a href="https://drive.google.com/drive/folders/1l2wle2UQYijJh6YHuR7p0KTzk3P-X7dE?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <div className="icon" style={{ backgroundImage: 'url(./Pictures/cv.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'left', width: '50px', height: '40px' }}></div>
          </a>
        </th>
        <th className='Linkedin'>
          <a href="https://www.linkedin.com/in/omarardila" target="_blank" rel="noopener noreferrer">
            <div className="icon" style={{ backgroundImage: 'url(./Pictures/linkedin.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'left', width: '50px', height: '40px' }}></div>
          </a>
        </th>
        <th className='Git'>
          <a href="https://github.com/omardila21" target="_blank" rel="noopener noreferrer">
            <div className="icon" style={{ backgroundImage: 'url(./Pictures/git.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'left', width: '50px', height: '40px' }}></div>
          </a>
        </th>
      </tr>
    </thead>
  </table> 
  
</div>
  );
};

export default Footer;