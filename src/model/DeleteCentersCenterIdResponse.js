

import ApiClient from '../ApiClient';

/**
 * The DeleteCentersCenterIdResponse model module.
 * @module model/DeleteCentersCenterIdResponse
 * @version 1.0
 */
class DeleteCentersCenterIdResponse {
    /**
     * Constructs a new <code>DeleteCentersCenterIdResponse</code>.
     * DeleteCentersCenterIdResponse
     * @alias module:model/DeleteCentersCenterIdResponse
     */
    constructor() { 
        
        DeleteCentersCenterIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteCentersCenterIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteCentersCenterIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteCentersCenterIdResponse} The populated <code>DeleteCentersCenterIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteCentersCenterIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = ApiClient.convertToType(data['changes'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteCentersCenterIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {Object} changes
 */
DeleteCentersCenterIdResponse.prototype['changes'] = undefined;






export default DeleteCentersCenterIdResponse;

