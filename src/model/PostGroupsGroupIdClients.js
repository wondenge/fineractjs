

import ApiClient from '../ApiClient';

/**
 * The PostGroupsGroupIdClients model module.
 * @module model/PostGroupsGroupIdClients
 * @version 1.0
 */
class PostGroupsGroupIdClients {
    /**
     * Constructs a new <code>PostGroupsGroupIdClients</code>.
     * @alias module:model/PostGroupsGroupIdClients
     */
    constructor() { 
        
        PostGroupsGroupIdClients.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGroupsGroupIdClients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGroupsGroupIdClients} obj Optional instance to populate.
     * @return {module:model/PostGroupsGroupIdClients} The populated <code>PostGroupsGroupIdClients</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGroupsGroupIdClients();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PostGroupsGroupIdClients.prototype['id'] = undefined;






export default PostGroupsGroupIdClients;

