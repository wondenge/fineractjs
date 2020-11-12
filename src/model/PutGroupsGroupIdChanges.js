

import ApiClient from '../ApiClient';

/**
 * The PutGroupsGroupIdChanges model module.
 * @module model/PutGroupsGroupIdChanges
 * @version 1.0
 */
class PutGroupsGroupIdChanges {
    /**
     * Constructs a new <code>PutGroupsGroupIdChanges</code>.
     * @alias module:model/PutGroupsGroupIdChanges
     */
    constructor() { 
        
        PutGroupsGroupIdChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGroupsGroupIdChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGroupsGroupIdChanges} obj Optional instance to populate.
     * @return {module:model/PutGroupsGroupIdChanges} The populated <code>PutGroupsGroupIdChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGroupsGroupIdChanges();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutGroupsGroupIdChanges.prototype['name'] = undefined;






export default PutGroupsGroupIdChanges;

