

import ApiClient from '../ApiClient';

/**
 * The PostResourceTypeResourceIdNotesResponse model module.
 * @module model/PostResourceTypeResourceIdNotesResponse
 * @version 1.0
 */
class PostResourceTypeResourceIdNotesResponse {
    /**
     * Constructs a new <code>PostResourceTypeResourceIdNotesResponse</code>.
     * PostResourceTypeResourceIdNotesResponse
     * @alias module:model/PostResourceTypeResourceIdNotesResponse
     */
    constructor() { 
        
        PostResourceTypeResourceIdNotesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostResourceTypeResourceIdNotesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostResourceTypeResourceIdNotesResponse} obj Optional instance to populate.
     * @return {module:model/PostResourceTypeResourceIdNotesResponse} The populated <code>PostResourceTypeResourceIdNotesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostResourceTypeResourceIdNotesResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostResourceTypeResourceIdNotesResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostResourceTypeResourceIdNotesResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostResourceTypeResourceIdNotesResponse.prototype['resourceId'] = undefined;






export default PostResourceTypeResourceIdNotesResponse;

