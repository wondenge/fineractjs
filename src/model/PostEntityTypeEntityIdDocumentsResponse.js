

import ApiClient from '../ApiClient';

/**
 * The PostEntityTypeEntityIdDocumentsResponse model module.
 * @module model/PostEntityTypeEntityIdDocumentsResponse
 * @version 1.0
 */
class PostEntityTypeEntityIdDocumentsResponse {
    /**
     * Constructs a new <code>PostEntityTypeEntityIdDocumentsResponse</code>.
     * PostEntityTypeEntityIdDocumentsResponse
     * @alias module:model/PostEntityTypeEntityIdDocumentsResponse
     */
    constructor() { 
        
        PostEntityTypeEntityIdDocumentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostEntityTypeEntityIdDocumentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostEntityTypeEntityIdDocumentsResponse} obj Optional instance to populate.
     * @return {module:model/PostEntityTypeEntityIdDocumentsResponse} The populated <code>PostEntityTypeEntityIdDocumentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostEntityTypeEntityIdDocumentsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('resourceIdentifier')) {
                obj['resourceIdentifier'] = ApiClient.convertToType(data['resourceIdentifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PostEntityTypeEntityIdDocumentsResponse.prototype['resourceId'] = undefined;

/**
 * @member {String} resourceIdentifier
 */
PostEntityTypeEntityIdDocumentsResponse.prototype['resourceIdentifier'] = undefined;






export default PostEntityTypeEntityIdDocumentsResponse;

