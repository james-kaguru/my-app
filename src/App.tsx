import churchIcon from './assets/church-map.png'
import peopleImage from './assets/people.webp'
import imageLogo from './assets/logo.png'
function App() {

  return (
    <>
      <div className={'flex flex-row justify-between'}>
        <p>Nairobi Pentecostal Bible College</p>
        <div className={'flex flex-row gap-3'}>
          <button className={'bg-accent text-primary'}>+254 700020979</button>
          <button className={'bg-accent text-primary'}>Access Profile</button>
          <button className={'bg-primary text-white'}>Apply Now</button>
        </div>
      </div>

      <nav className={'bg-secondary text-white flex flex-row justify-center'} >
        <a href='/' className={'bg-primary p-2'}>Home</a>
        <a href='/' className={'p-2'}>Admissions</a>
        <a href='/' className={'p-2'}>Courses</a>
        <a href='/' className={'p-2'}>E-learning</a>
        <a href='/' className={'p-2'}>Downloads</a>
        <a href='/' className={'p-2'}>Contact Us</a>
        <a href='/' className={'p-2'}>About Us</a>
      </nav>

      <div className={'bg-primary text-white flex flex-row h-[400px] items-center gap-3'}>
          <div className={'border-r-2 border-white p-5 text-2xl'}>Postgraduate programs</div>
          <div className={'border-r-2 border-white p-5 text-2xl'}>Undergraduate programs</div>
          <div className={'border-r-2 border-white p-5 text-2xl'}>Diploma programs</div>
          <div className={'border-r-2 border-white p-5 text-2xl'}>Certificate programs</div>
      </div>

      <div className={'flex flex-row bg-secondary text-white p-14'}>
        <div className={'w-1/2 flex flex-col gap-2 items-center justify-center h-[400px]'}>
          <img src={imageLogo} alt={'logo'} className={'w-[300px]'}/>
          <p className={'text-2xl'}>Nairobi Pentecostal Bible College</p>
        </div>
        <div className={'w-1/2 flex flex-col gap-3'}>
          <h2 className={'text-lg'}>We are registered by the Ministry of Education as a private TVET institution since 2018</h2>
          <p>We are working with other 70 denominations in over 40 counties in Kenya and in 200 centers on learning we exist to bring maturity to church and transformation to society through equipped leadership based on christian values and principles by training people in their area of calling</p>
          <div>
            <p className={'font-bold mb-3'}>Our Uniqueness</p>
            <br/>
            <div className={'flex flex-row gap-2'}>
              <div>
                <div className={'bg-white rounded-[100px] p-2'}>
                  <img src={churchIcon} alt={'chruchIcon'}/>
                </div>
                <p className={'p-3'}>Affordable</p>
              </div>
              <div>
                <div className={'bg-white rounded-[100px] p-2'}>
                  <img src={churchIcon} alt={'chruchIcon'}/>
                </div>
                <p className={'p-3'}>Accssible</p>
              </div>
              <div>
                <div className={'bg-white rounded-[100px] p-2'}>
                  <img src={churchIcon} alt={'chruchIcon'}/>
                </div>
                <p className={'p-3'}>Accredited</p>
              </div>
              <div>
                <div className={'bg-white rounded-[100px] p-2'}>
                  <img src={churchIcon} alt={'chruchIcon'}/>
                </div>
                <p className={'p-3'}>Relevant to Ministry</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={'p-14 bg-secondary'}>
        <div className={'bg-white text-center p-6'}>
          <h2 className={'text-lg font-bold p-6'}>Life at NPBC</h2>
          <p className={'text-slate-800'}>Your time at npbc is a great opportunity to discover, develop and
            deploy your christian ministry</p>
        </div>

        <div className={'text-white flex flex-row'}>
          <div className="w-1/4 relative overflow-hidden">
            <img
              className="object-cover object-center h-[300px] w-fullblock"
              src={peopleImage}
              alt={'image'}
            />
            <div
              className="p-3 absolute bottom-0 w-full bg-opacity-95 bg-gradient-to-t from-neutral-800">
              <h3
                className=" font-extrabold text-white text-2xl">Admissions</h3>
              <p>Every year, NPBC offers half scholarship for the first 20
                applicants in the full time diploma program.</p>
            </div>
          </div>
          <div className="w-1/4 relative overflow-hidden">
            <img
              className="object-cover object-center h-[300px] w-fullblock"
              src={peopleImage}
              alt={'image'}
            />
            <div
              className="p-3 absolute bottom-0 w-full bg-opacity-95 bg-gradient-to-t from-neutral-800">
              <h3
                className=" font-extrabold text-white text-2xl">Admissions</h3>
              <p>Every year, NPBC offers half scholarship for the first 20
                applicants in the full time diploma program.</p>
            </div>
          </div>
          <div className="w-1/4 relative overflow-hidden">
            <img
              className="object-cover object-center h-[300px] w-fullblock"
              src={peopleImage}
              alt={'image'}
            />
            <div
              className="p-3 absolute bottom-0 w-full bg-opacity-95 bg-gradient-to-t from-neutral-800">
              <h3
                className=" font-extrabold text-white text-2xl">Admissions</h3>
              <p>Every year, NPBC offers half scholarship for the first 20
                applicants in the full time diploma program.</p>
            </div>
          </div>
          <div className="w-1/4 relative overflow-hidden">
            <img
              className="object-cover object-center h-[300px] w-fullblock"
              src={peopleImage}
              alt={'image'}
            />
            <div
              className="p-3 absolute bottom-0 w-full bg-opacity-95 bg-gradient-to-t from-neutral-800">
              <h3
                className=" font-extrabold text-white text-2xl">Admissions</h3>
              <p>Every year, NPBC offers half scholarship for the first 20
                applicants in the full time diploma program.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={'flex flex-row'}>
        <div className={'w-1/2'}>
          <img src={peopleImage} alt={'people'} className={'object-cover h-full'}/>
        </div>
        <div className={'w-1/2 bg-primary text-white p-3 flex flex-col gap-6 p-6'}>
          <h2 className={'text-lg font-bold text-center'}>Apply for Addmission</h2>
          <p className={'text-center font-bold'}>2024 Applications are now open</p>
          <p>Please contact our admission office on +254754569687,
            +254115008558, +25474090922, +254111539596 who will be happy to
            arrange this for you. For detailed information, brochures and other
            forms can be mailed to you upon request.</p>
          <br/>
          <p>For Detailed information, brochures and other forms can be mailed
            to you upon request.</p>
          <button className={'bg-white text-primary'}>Apply Now</button>
        </div>
      </div>

      <div className={'bg-ima'}>
        <h2>Become a student at NPBC</h2>
        <button>Apply Today</button>
      </div>

      <div>
        <div>
          <h2>NPBC</h2>
          <div>
            <p>Location: Garden Estate Off Thika Road</p>
            <p>Hours: 8.00am - 5:00pm</p>
            <p>Telephone: 0754 569 687</p>
            <p>Email: admin@npbc.co.ke</p>
          </div>
        </div>

        <div>
          <h2>Explore</h2>
          <div>
            <p>Location: Garden Estate Off Thika Road</p>
            <p>Hours: 8.00am - 5:00pm</p>
            <p>Telephone: 0754 569 687</p>
            <p>Email: admin@npbc.co.ke</p>
          </div>
        </div>

        <div>
          <h2>Quick links</h2>
          <div>
            <p>Location: Garden Estate Off Thika Road</p>
            <p>Hours: 8.00am - 5:00pm</p>
            <p>Telephone: 0754 569 687</p>
            <p>Email: admin@npbc.co.ke</p>
          </div>
        </div>

        <div>
          <h2>Reserch</h2>
          <div>
            <p>NPBC Online</p>
            <p>Reflection Blog</p>
            <p>Community Engagement</p>
            <p>Email: admin@npbc.co.ke</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
