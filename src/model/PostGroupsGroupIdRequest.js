

import ApiClient from '../ApiClient';
import PostGroupsGroupIdClients from './PostGroupsGroupIdClients';

/**
 * The PostGroupsGroupIdRequest model module.
 * @module model/PostGroupsGroupIdRequest
 * @version 1.0
 */
class PostGroupsGroupIdRequest {
    /**
     * Constructs a new <code>PostGroupsGroupIdRequest</code>.
     * PostGroupsGroupIdRequest
     * @alias module:model/PostGroupsGroupIdRequest
     */
    constructor() { 
        
        PostGroupsGroupIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGroupsGroupIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGroupsGroupIdRequest} obj Optional instance to populate.
     * @return {module:model/PostGroupsGroupIdRequest} The populated <code>PostGroupsGroupIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGroupsGroupIdRequest();

            if (data.hasOwnProperty('destinationGroupId')) {
                obj['destinationGroupId'] = ApiClient.convertToType(data['destinationGroupId'], 'Number');
            }
            if (data.hasOwnProperty('clients')) {
                obj['clients'] = ApiClient.convertToType(data['clients'], [PostGroupsGroupIdClients]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} destinationGroupId
 */
PostGroupsGroupIdRequest.prototype['destinationGroupId'] = undefined;

/**
 * @member {Array.<module:model/PostGroupsGroupIdClients>} clients
 */
PostGroupsGroupIdRequest.prototype['clients'] = undefined;






export default PostGroupsGroupIdRequest;

