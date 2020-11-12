

import ApiClient from '../ApiClient';

/**
 * The DeleteCodesResponse model module.
 * @module model/DeleteCodesResponse
 * @version 1.0
 */
class DeleteCodesResponse {
    /**
     * Constructs a new <code>DeleteCodesResponse</code>.
     * DeleteCodesResponse
     * @alias module:model/DeleteCodesResponse
     */
    constructor() { 
        
        DeleteCodesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteCodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteCodesResponse} obj Optional instance to populate.
     * @return {module:model/DeleteCodesResponse} The populated <code>DeleteCodesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteCodesResponse();

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
DeleteCodesResponse.prototype['resourceId'] = undefined;






export default DeleteCodesResponse;

