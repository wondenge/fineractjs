

import ApiClient from '../ApiClient';

/**
 * The PostStandingInstructionsResponse model module.
 * @module model/PostStandingInstructionsResponse
 * @version 1.0
 */
class PostStandingInstructionsResponse {
    /**
     * Constructs a new <code>PostStandingInstructionsResponse</code>.
     * PostStandingInstructionsResponse
     * @alias module:model/PostStandingInstructionsResponse
     */
    constructor() { 
        
        PostStandingInstructionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostStandingInstructionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostStandingInstructionsResponse} obj Optional instance to populate.
     * @return {module:model/PostStandingInstructionsResponse} The populated <code>PostStandingInstructionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostStandingInstructionsResponse();

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
 * @member {Number} clientId
 */
PostStandingInstructionsResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostStandingInstructionsResponse.prototype['resourceId'] = undefined;






export default PostStandingInstructionsResponse;

