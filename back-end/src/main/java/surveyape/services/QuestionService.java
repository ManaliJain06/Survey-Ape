package surveyape.services;

import org.springframework.stereotype.Service;
import surveyape.models.Question;

@Service
public interface QuestionService {
    Question createQuestion(Question question);
}
