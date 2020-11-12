

import ApiClient from '../ApiClient';
import Header from './Header';

/**
 * The BatchResponse model module.
 * @module model/BatchResponse
 * @version 1.0
 */
class BatchResponse {
    /**
     * Constructs a new <code>BatchResponse</code>.
     * @alias module:model/BatchResponse
     */
    constructor() { 
        
        BatchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchResponse} obj Optional instance to populate.
     * @return {module:model/BatchResponse} The populated <code>BatchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchResponse();

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'Number');
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], [Header]);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} requestId
 */
BatchResponse.prototype['requestId'] = undefined;

/**
 * @member {Number} statusCode
 */
BatchResponse.prototype['statusCode'] = undefined;

/**
 * @member {Array.<module:model/Header>} headers
 */
BatchResponse.prototype['headers'] = undefined;

/**
 * @member {String} body
 */
BatchResponse.prototype['body'] = undefined;






export default BatchResponse;

