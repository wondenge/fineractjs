

import ApiClient from '../ApiClient';

/**
 * The DeleteAccountNumberFormatsResponse model module.
 * @module model/DeleteAccountNumberFormatsResponse
 * @version 1.0
 */
class DeleteAccountNumberFormatsResponse {
    /**
     * Constructs a new <code>DeleteAccountNumberFormatsResponse</code>.
     * DeleteAccountNumberFormatsResponse
     * @alias module:model/DeleteAccountNumberFormatsResponse
     */
    constructor() { 
        
        DeleteAccountNumberFormatsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteAccountNumberFormatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAccountNumberFormatsResponse} obj Optional instance to populate.
     * @return {module:model/DeleteAccountNumberFormatsResponse} The populated <code>DeleteAccountNumberFormatsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAccountNumberFormatsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteAccountNumberFormatsResponse.prototype['resourceId'] = undefined;






export default DeleteAccountNumberFormatsResponse;

