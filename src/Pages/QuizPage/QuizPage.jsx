import React from 'react'
import CardQuiz from '../../Components/CardQuiz/CardQuiz'

function QuizPage() {
  return (
    <>
      <h2
        className="text-center p-4 fw-semibold"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        Quiz Seni
      </h2>
      <div className="container my-5">
        <div className="row gy-3 mx-auto">
          <div className="col">
            <CardQuiz
              image="https://picsum.photos/200/300"
              title="Seni Rupa"
            />
          </div>
          <div className="col">
            <CardQuiz
              image="https://picsum.photos/200/300"
              title="Seni Tari"
            />
          </div>
          <div className="col">
            <CardQuiz
              image="https://picsum.photos/200/300"
              title="Seni Musik"
            />
          </div>
          <div className="col">
            <CardQuiz
              image="https://picsum.photos/200/300"
              title="Seni Teater"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizPage;