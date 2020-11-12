

import ApiClient from '../ApiClient';

/**
 * The PostSavingsCharges model module.
 * @module model/PostSavingsCharges
 * @version 1.0
 */
class PostSavingsCharges {
    /**
     * Constructs a new <code>PostSavingsCharges</code>.
     * @alias module:model/PostSavingsCharges
     */
    constructor() { 
        
        PostSavingsCharges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsCharges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsCharges} obj Optional instance to populate.
     * @return {module:model/PostSavingsCharges} The populated <code>PostSavingsCharges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsCharges();

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
PostSavingsCharges.prototype['id'] = undefined;






export default PostSavingsCharges;

