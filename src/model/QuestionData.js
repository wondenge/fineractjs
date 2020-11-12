

import ApiClient from '../ApiClient';
import ResponseData from './ResponseData';

/**
 * The QuestionData model module.
 * @module model/QuestionData
 * @version 1.0
 */
class QuestionData {
    /**
     * Constructs a new <code>QuestionData</code>.
     * @alias module:model/QuestionData
     */
    constructor() { 
        
        QuestionData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuestionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuestionData} obj Optional instance to populate.
     * @return {module:model/QuestionData} The populated <code>QuestionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuestionData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('responseDatas')) {
                obj['responseDatas'] = ApiClient.convertToType(data['responseDatas'], [ResponseData]);
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
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
QuestionData.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/ResponseData>} responseDatas
 */
QuestionData.prototype['responseDatas'] = undefined;

/**
 * @member {String} componentKey
 */
QuestionData.prototype['componentKey'] = undefined;

/**
 * @member {String} key
 */
QuestionData.prototype['key'] = undefined;

/**
 * @member {String} text
 */
QuestionData.prototype['text'] = undefined;

/**
 * @member {String} description
 */
QuestionData.prototype['description'] = undefined;

/**
 * @member {Number} sequenceNo
 */
QuestionData.prototype['sequenceNo'] = undefined;






export default QuestionData;

