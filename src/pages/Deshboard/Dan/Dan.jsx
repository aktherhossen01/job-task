
import './Dan.css'
import './Script.js'
const Dan = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center ">Drag and Drop</h1>
            <section className="container">
                <div className="box">
                    <div className="image" draggable="true"></div>
                </div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </section>
        </div>
    );
};

export default Dan;