import React from 'react';

const Instructor = () => {
    return (
        <div>
            <div className="about">

                <h1>Instructor</h1>

            </div>
            <div className="container p-5 my-5 text-center">
                <h1>Our Most</h1>
                <h1>Popular Teachers</h1>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
            </div>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://themepure.net/template/educal/educal/assets/img/teacher/teacger-1.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lillian Walsh</h5>
                                <h6>CO Founder</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://themepure.net/template/educal/educal/assets/img/teacher/teacher-2.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Kelly Franklin</h5>
                                <h6>Desginer</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://themepure.net/template/educal/educal/assets/img/teacher/teacher-3.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hilary Ouse</h5>
                                <h6>street Photographer</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://themepure.net/template/educal/educal/assets/img/teacher/teacher-5.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lillian Walsh</h5>
                                <h6>CO Founder</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;