

import ApiClient from '../ApiClient';

/**
 * The PostAccountNumberFormatsRequest model module.
 * @module model/PostAccountNumberFormatsRequest
 * @version 1.0
 */
class PostAccountNumberFormatsRequest {
    /**
     * Constructs a new <code>PostAccountNumberFormatsRequest</code>.
     * PostAccountNumberFormatsRequest
     * @alias module:model/PostAccountNumberFormatsRequest
     */
    constructor() { 
        
        PostAccountNumberFormatsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountNumberFormatsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountNumberFormatsRequest} obj Optional instance to populate.
     * @return {module:model/PostAccountNumberFormatsRequest} The populated <code>PostAccountNumberFormatsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountNumberFormatsRequest();

            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = ApiClient.convertToType(data['accountType'], 'Number');
            }
            if (data.hasOwnProperty('prefixType')) {
                obj['prefixType'] = ApiClient.convertToType(data['prefixType'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} accountType
 */
PostAccountNumberFormatsRequest.prototype['accountType'] = undefined;

/**
 * @member {Number} prefixType
 */
PostAccountNumberFormatsRequest.prototype['prefixType'] = undefined;






export default PostAccountNumberFormatsRequest;

