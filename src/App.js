import styles from './componentcss/style.module.css';
import Footer from './components/footer.component';
import Header from './components/header.component';
import ParaImage from './components/paraImage.component';
import dropdownData from './data/dropdown.json' 
import footerData from './data/footer.json'
import sectionData from './data/section.json'
import articleData from './data/article.json'
function App() {
  console.log([...dropdownData.data]);
  return (
    <div className="App">
      <Header/>
      <article> 
        {
          articleData.data.map(data=>{
            return(
              <ParaImage
              heading={data.heading}
              text={data.text? data.text:null}
              imageUrl={data.imageUrl}
              buttonText={data.buttonText? data.buttonText: null}
              reverse = {data.reverse?true:false}
              dropdownData = {data.dropdownData? data.dropdownData: null}
            />
            )
          })
        }
      </article>
      <section>
        {
          sectionData.data.map(data=>{
            return(
              <ParaImage
                heading={data.title}
                text={data.text}
                imageUrl={data.imageUrl}
                alt = {data.alt}
                section = {true}
              />
            )
          })
        }
      </section>
      <footer style={{ backgroundColor: '#e7b75f' }}>
        <div className={styles.relatedlinks}>
          <ul>
            <li className={styles.listHeading}>Related Links: </li>
            <li>Landing Page</li>
            <li>Build emails And landing page in minutes </li>
            <li>Third pieces landing page recipe</li>
          </ul>            
        </div> 
        <hr style={{ backgroundColor: "rgba(36,28,21,.3)"}}/>   
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {
              footerData.data.map((data, index) => (
                  <Footer
                      key={index} // Make sure to provide a unique key
                      data={data}
                  />
              ))
          }
        </div>
      </footer>

    </div>
  );
}

export default App;
