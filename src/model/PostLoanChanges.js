

import ApiClient from '../ApiClient';

/**
 * The PostLoanChanges model module.
 * @module model/PostLoanChanges
 * @version 1.0
 */
class PostLoanChanges {
    /**
     * Constructs a new <code>PostLoanChanges</code>.
     * @alias module:model/PostLoanChanges
     */
    constructor() { 
        
        PostLoanChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoanChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoanChanges} obj Optional instance to populate.
     * @return {module:model/PostLoanChanges} The populated <code>PostLoanChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoanChanges();

            if (data.hasOwnProperty('removedEntityIds')) {
                obj['removedEntityIds'] = ApiClient.convertToType(data['removedEntityIds'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} removedEntityIds
 */
PostLoanChanges.prototype['removedEntityIds'] = undefined;






export default PostLoanChanges;

