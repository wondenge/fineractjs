

import ApiClient from '../ApiClient';

/**
 * The DeleteReportsResponse model module.
 * @module model/DeleteReportsResponse
 * @version 1.0
 */
class DeleteReportsResponse {
    /**
     * Constructs a new <code>DeleteReportsResponse</code>.
     * DeleteReportsResponse
     * @alias module:model/DeleteReportsResponse
     */
    constructor() { 
        
        DeleteReportsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteReportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteReportsResponse} obj Optional instance to populate.
     * @return {module:model/DeleteReportsResponse} The populated <code>DeleteReportsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteReportsResponse();

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
DeleteReportsResponse.prototype['resourceId'] = undefined;






export default DeleteReportsResponse;

