import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';
class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false
        };
    }
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            this.setState({
                incorrectAnswer: false
            });
        } else {
            this.setState({
                incorrectAnswer: true
            });
        }
    }
    render() {
        console.log(this.props.quiz_question.answer_options);
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((anwser_option, index) => {
                            return (
                                <QuizQuestionButton key={index} button_text={anwser_option} clickHandler={this.handleClick.bind(this)} />
                            );
                        })}

                    </ul>
                </section>
                {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : ""}
            </main>
        );
    }

}

export default QuizQuestion;