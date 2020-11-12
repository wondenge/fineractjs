

import ApiClient from '../ApiClient';

/**
 * The PostMakerCheckersResponse model module.
 * @module model/PostMakerCheckersResponse
 * @version 1.0
 */
class PostMakerCheckersResponse {
    /**
     * Constructs a new <code>PostMakerCheckersResponse</code>.
     * PostMakerCheckersResponse
     * @alias module:model/PostMakerCheckersResponse
     */
    constructor() { 
        
        PostMakerCheckersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostMakerCheckersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostMakerCheckersResponse} obj Optional instance to populate.
     * @return {module:model/PostMakerCheckersResponse} The populated <code>PostMakerCheckersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostMakerCheckersResponse();

            if (data.hasOwnProperty('auditId')) {
                obj['auditId'] = ApiClient.convertToType(data['auditId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} auditId
 */
PostMakerCheckersResponse.prototype['auditId'] = undefined;






export default PostMakerCheckersResponse;

