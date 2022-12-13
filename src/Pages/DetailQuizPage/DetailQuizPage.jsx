import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DetailQuizPage.css";

import ReactDOMServer from "react-dom/server";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListAside from "Components/ListAside/ListAside";
import { getDetailModul } from "../../Redux/Actions/modulActions";
import TemplateDetailContent from "../../Components/TemplateDetailContent/TemplateDetailContent";
import TemplateDetailContentWithVideo from "../../Components/TemplateDetailContent/TemplateDetailContentWithVideo";

function DetailQuizPage(title) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const response = useRef(null);
  const { modul, isLoading } = useSelector((state) => state.modul);

  const history = useNavigate();

  const { contents } = useSelector((state) => state.modul.modul);

  const [testName, setTestName] = useState("");
  const [questions, setQuestions] = useState([]);

  const getTestDetail = async () => {
    const res = await fetch(
      `https://serrla-api.up.railway.app/courses/${id}/tests/1`
    );
    const data = await res.json();
    setTestName(`id: ${data.data && data.data[0].id}`);
  };

  const getQuestions = async () => {
    const res = await fetch(
      `https://serrla-api.up.railway.app/courses/${id}/tests/1/questions`
    );
    let data = await res.json();
    setQuestions(data);
  };

  useEffect(() => {
    getQuestions();
    getTestDetail();
    dispatch(getDetailModul(id));
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // const handleClickAside = (e, idxContent) => {
  // 	localStorage.setItem("listAsideActiveFromQuiz", e.target.dataset.list);
  // 	const { title, description, image, video } = modul.modules[idxContent];
  // 	history(
  // 		`/modul/detail-modul/${localStorage.getItem(
  // 			"listAsideActiveFromDetailModul"
  // 		)}`
  // 	);

  // 	const list = document.querySelectorAll(".list-span");
  // 	list.forEach((item) => {
  // 		item.classList.remove("active");
  // 	});
  // 	e.target.classList.add("active");
  // };

  const [btnState, setBtnState] = useState(true);

  const handleClickQuiz = () => {
    setBtnState(btnState);
  };

  let toggleClassCheck = btnState ? " active" : null;

  const handleClickAside = (e, idxContent) => {
    const { title, description, image, video } = modul.modules[idxContent];
    if (video) {
      response.current.innerHTML = ReactDOMServer.renderToString(
        <TemplateDetailContentWithVideo
          title={title}
          description={description}
          image={image}
          video={video}
        />
      );
    } else {
      response.current.innerHTML = ReactDOMServer.renderToString(
        <TemplateDetailContent
          title={title}
          description={description}
          image={image}
        />
      );
    }
    const list = document.querySelectorAll(".list-span");
    list.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <>
      <div>
        <section className="detail-modul">
          <div className="container-fluid">
            <div className="row">
              <aside className="p-4 aside-daftar col-md-4">
                <div className="container-daftar">
                  <h3 className="daftar">Daftar Materi</h3>
                  <ul className="list">
                    {modul.modules &&
                      modul.modules.map((item, index) => {
                        return (
                          <Link
                            to={`/modul/detail-modul/${id}`}
                            className="text-black text-decoration-none"
                          >
                            <ListAside
                              no={index + 1}
                              title={item.title}
                              key={index}
                              onClick={(e) => handleClickAside(e, index)}
                            />
                          </Link>
                        );
                      })}
                    <li
                      className={`list-span ${toggleClassCheck}`}
                      onClick={handleClickQuiz}
                      data-list="5"
                    >
                      <Link
                        className="text-black text-decoration-none"
                        to={`/modul/detail-modul/${id}/test`}
                      >
                        5. Quiz
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
              <div className="col-md-8" id="response">
                {showScore ? (
                  <div className="container my-5 container-seni">
                    <div className="container-nilai">
                      <div className="selamat">
                        Selamat! Anda telah menyelesaikan Quiz
                      </div>
                      <div className="selamat-2">Anda mendapatkan nilai :</div>
                      <div className="score">
                        {(score / questions.data.length) * 100}
                      </div>
                      <div className="jawaban">
                        Anda menjawab benar <strong>{score}</strong> dari{" "}
                        <strong>{questions.data.length}</strong> soal
                      </div>
                      <Link to="/modul" className="btn-kembali-quiz">
                        Kembali ke Halaman Modul
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2
                      className="text-center p-4 fw-semibold"
                      style={{
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      Quiz
                    </h2>
                    <div className="container my-5 container-seni">
                      {questions.data ? (
                        <>
                          <div className="question-section">
                            <div className="question-count">
                              <span>{currentQuestion + 1}</span>/
                              {questions.data && questions.data.length}
                            </div>
                            <div className="question-text">
                              Q :{" "}
                              {questions.data &&
                                questions.data[currentQuestion].question}
                            </div>
                          </div>

                          <div className="answer-section">
                            <button
                              className="btn-options"
                              onClick={() =>
                                handleAnswerButtonClick(
                                  questions.data[currentQuestion].answer_key ===
                                    "a"
                                )
                              }
                            >
                              {questions.data[currentQuestion].a}
                            </button>

                            <button
                              className="btn-options"
                              onClick={() =>
                                handleAnswerButtonClick(
                                  questions.data[currentQuestion].answer_key ===
                                    "b"
                                )
                              }
                            >
                              {questions.data[currentQuestion].b}
                            </button>

                            <button
                              className="btn-options"
                              onClick={() =>
                                handleAnswerButtonClick(
                                  questions.data[currentQuestion].answer_key ===
                                    "c"
                                )
                              }
                            >
                              {questions.data[currentQuestion].c}
                            </button>

                            <button
                              className="btn-options"
                              onClick={() =>
                                handleAnswerButtonClick(
                                  questions.data[currentQuestion].answer_key ===
                                    "d"
                                )
                              }
                            >
                              {questions.data[currentQuestion].d}
                            </button>
                          </div>
                        </>
                      ) : (
                        <div>Loading...</div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DetailQuizPage;
