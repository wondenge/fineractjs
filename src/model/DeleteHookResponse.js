

import ApiClient from '../ApiClient';

/**
 * The DeleteHookResponse model module.
 * @module model/DeleteHookResponse
 * @version 1.0
 */
class DeleteHookResponse {
    /**
     * Constructs a new <code>DeleteHookResponse</code>.
     * DeleteHookResponse
     * @alias module:model/DeleteHookResponse
     */
    constructor() { 
        
        DeleteHookResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteHookResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteHookResponse} obj Optional instance to populate.
     * @return {module:model/DeleteHookResponse} The populated <code>DeleteHookResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteHookResponse();

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
DeleteHookResponse.prototype['resourceId'] = undefined;






export default DeleteHookResponse;

