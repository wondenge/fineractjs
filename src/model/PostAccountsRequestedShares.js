  

import ApiClient from '../ApiClient';

/**
 * The PostAccountsRequestedShares model module.
 * @module model/PostAccountsRequestedShares
 * @version 1.0
 */
class PostAccountsRequestedShares {
    /**
     * Constructs a new <code>PostAccountsRequestedShares</code>.
     * @alias module:model/PostAccountsRequestedShares
     */
    constructor() { 
        
        PostAccountsRequestedShares.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountsRequestedShares</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountsRequestedShares} obj Optional instance to populate.
     * @return {module:model/PostAccountsRequestedShares} The populated <code>PostAccountsRequestedShares</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountsRequestedShares();

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
PostAccountsRequestedShares.prototype['id'] = undefined;






export default PostAccountsRequestedShares;

