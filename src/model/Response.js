

import ApiClient from '../ApiClient';
import Question from './Question';

/**
 * The Response model module.
 * @module model/Response
 * @version 1.0
 */
class Response {
    /**
     * Constructs a new <code>Response</code>.
     * @alias module:model/Response
     */
    constructor() { 
        
        Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Response} obj Optional instance to populate.
     * @return {module:model/Response} The populated <code>Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Response();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('question')) {
                obj['question'] = Question.constructFromObject(data['question']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
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
Response.prototype['id'] = undefined;

/**
 * @member {module:model/Question} question
 */
Response.prototype['question'] = undefined;

/**
 * @member {String} text
 */
Response.prototype['text'] = undefined;

/**
 * @member {Number} value
 */
Response.prototype['value'] = undefined;

/**
 * @member {Number} sequenceNo
 */
Response.prototype['sequenceNo'] = undefined;

/**
 * @member {Boolean} new
 */
Response.prototype['new'] = undefined;






export default Response;

