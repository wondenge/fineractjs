

import ApiClient from '../ApiClient';

/**
 * The PostSelfLoansLoanIdStatus model module.
 * @module model/PostSelfLoansLoanIdStatus
 * @version 1.0
 */
class PostSelfLoansLoanIdStatus {
    /**
     * Constructs a new <code>PostSelfLoansLoanIdStatus</code>.
     * @alias module:model/PostSelfLoansLoanIdStatus
     */
    constructor() { 
        
        PostSelfLoansLoanIdStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfLoansLoanIdStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfLoansLoanIdStatus} obj Optional instance to populate.
     * @return {module:model/PostSelfLoansLoanIdStatus} The populated <code>PostSelfLoansLoanIdStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfLoansLoanIdStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('pendingApproval')) {
                obj['pendingApproval'] = ApiClient.convertToType(data['pendingApproval'], 'Boolean');
            }
            if (data.hasOwnProperty('waitingForDisbursal')) {
                obj['waitingForDisbursal'] = ApiClient.convertToType(data['waitingForDisbursal'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('closedObligationsMet')) {
                obj['closedObligationsMet'] = ApiClient.convertToType(data['closedObligationsMet'], 'Boolean');
            }
            if (data.hasOwnProperty('closedWrittenOff')) {
                obj['closedWrittenOff'] = ApiClient.convertToType(data['closedWrittenOff'], 'Boolean');
            }
            if (data.hasOwnProperty('closedRescheduled')) {
                obj['closedRescheduled'] = ApiClient.convertToType(data['closedRescheduled'], 'Boolean');
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
            if (data.hasOwnProperty('overpaid')) {
                obj['overpaid'] = ApiClient.convertToType(data['overpaid'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PostSelfLoansLoanIdStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
PostSelfLoansLoanIdStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
PostSelfLoansLoanIdStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} pendingApproval
 */
PostSelfLoansLoanIdStatus.prototype['pendingApproval'] = undefined;

/**
 * @member {Boolean} waitingForDisbursal
 */
PostSelfLoansLoanIdStatus.prototype['waitingForDisbursal'] = undefined;

/**
 * @member {Boolean} active
 */
PostSelfLoansLoanIdStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closedObligationsMet
 */
PostSelfLoansLoanIdStatus.prototype['closedObligationsMet'] = undefined;

/**
 * @member {Boolean} closedWrittenOff
 */
PostSelfLoansLoanIdStatus.prototype['closedWrittenOff'] = undefined;

/**
 * @member {Boolean} closedRescheduled
 */
PostSelfLoansLoanIdStatus.prototype['closedRescheduled'] = undefined;

/**
 * @member {Boolean} closed
 */
PostSelfLoansLoanIdStatus.prototype['closed'] = undefined;

/**
 * @member {Boolean} overpaid
 */
PostSelfLoansLoanIdStatus.prototype['overpaid'] = undefined;






export default PostSelfLoansLoanIdStatus;

