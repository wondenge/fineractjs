

import ApiClient from '../ApiClient';
import Response from './Response';
import Survey from './Survey';

/**
 * The Question model module.
 * @module model/Question
 * @version 1.0
 */
class Question {
    /**
     * Constructs a new <code>Question</code>.
     * @alias module:model/Question
     */
    constructor() { 
        
        Question.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Question</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Question} obj Optional instance to populate.
     * @return {module:model/Question} The populated <code>Question</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Question();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('survey')) {
                obj['survey'] = Survey.constructFromObject(data['survey']);
            }
            if (data.hasOwnProperty('responses')) {
                obj['responses'] = ApiClient.convertToType(data['responses'], [Response]);
            }
            if (data.hasOwnProperty('componentKey')) {
                obj['componentKey'] = ApiClient.convertToType(data['componentKey'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('sequenceNo')) {
                obj['sequenceNo'] = ApiClient.convertToType(data['sequenceNo'], 'Number');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Question.prototype['id'] = undefined;

/**
 * @member {module:model/Survey} survey
 */
Question.prototype['survey'] = undefined;

/**
 * @member {Array.<module:model/Response>} responses
 */
Question.prototype['responses'] = undefined;

/**
 * @member {String} componentKey
 */
Question.prototype['componentKey'] = undefined;

/**
 * @member {String} key
 */
Question.prototype['key'] = undefined;

/**
 * @member {String} text
 */
Question.prototype['text'] = undefined;

/**
 * @member {String} description
 */
Question.prototype['description'] = undefined;

/**
 * @member {Number} sequenceNo
 */
Question.prototype['sequenceNo'] = undefined;

/**
 * @member {Boolean} new
 */
Question.prototype['new'] = undefined;






export default Question;

