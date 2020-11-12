

import ApiClient from '../ApiClient';
import PostSelfLoansData from './PostSelfLoansData';

/**
 * The PostSelfLoansDatatables model module.
 * @module model/PostSelfLoansDatatables
 * @version 1.0
 */
class PostSelfLoansDatatables {
    /**
     * Constructs a new <code>PostSelfLoansDatatables</code>.
     * @alias module:model/PostSelfLoansDatatables
     */
    constructor() { 
        
        PostSelfLoansDatatables.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfLoansDatatables</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfLoansDatatables} obj Optional instance to populate.
     * @return {module:model/PostSelfLoansDatatables} The populated <code>PostSelfLoansDatatables</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfLoansDatatables();

            if (data.hasOwnProperty('registeredTableName')) {
                obj['registeredTableName'] = ApiClient.convertToType(data['registeredTableName'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = PostSelfLoansData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} registeredTableName
 */
PostSelfLoansDatatables.prototype['registeredTableName'] = undefined;

/**
 * @member {module:model/PostSelfLoansData} data
 */
PostSelfLoansDatatables.prototype['data'] = undefined;






export default PostSelfLoansDatatables;

