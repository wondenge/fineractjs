  

import ApiClient from '../ApiClient';

/**
 * The ResponseData model module.
 * @module model/ResponseData
 * @version 1.0
 */
class ResponseData {
    /**
     * Constructs a new <code>ResponseData</code>.
     * @alias module:model/ResponseData
     */
    constructor() { 
        
        ResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseData} obj Optional instance to populate.
     * @return {module:model/ResponseData} The populated <code>ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ResponseData.prototype['id'] = undefined;

/**
 * @member {String} text
 */
ResponseData.prototype['text'] = undefined;

/**
 * @member {Number} value
 */
ResponseData.prototype['value'] = undefined;

/**
 * @member {Number} sequenceNo
 */
ResponseData.prototype['sequenceNo'] = undefined;






export default ResponseData;

